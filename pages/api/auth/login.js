import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { email, password } = req.body;

  try {
    const admin = await prisma.tb_administradores.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.senha_hash);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const token = jwt.sign(
      {
        userId: admin.id,
        email: admin.email,
        name: admin.nome,
        organizacaoId: admin.organizacao_id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    //  Cria o cookie seguro que será lido pelo getServerSideProps
    const cookie = serialize("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 8, // 8 horas em segundos
      path: "/",
    });

    // Define o cookie no cabeçalho da resposta
    res.setHeader("Set-Cookie", cookie);

    //  Envia a resposta JSON para o frontend
    res.status(200).json({
      message: "Login bem-sucedido!",
      user: {
        id: admin.id,
        nome: admin.nome,
        email: admin.email,
        cargo: admin.cargo,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
}
