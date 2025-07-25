import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  // 1. Garante que esta rota só aceite requisições do tipo POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  // 2. Extrai os dados do corpo da requisição (enviados pelo formulário)
  const { fullName, email, password, organization, role } = req.body;

  // 3. Validação simples para garantir que os campos essenciais foram enviados
  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Nome, e-mail e senha são obrigatórios." });
  }

  try {
    // 4. Criptografa a senha para nunca salvá-la em texto puro no banco de dados
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Usa o Prisma para criar o novo registro na tabela "Administradores"
    const newAdmin = await prisma.tb_administradores.create({
      data: {
        nome: fullName,
        email: email,
        senha_hash: hashedPassword,
        cargo: role,
        tb_organizacoes: {
          connect: { id: 1 },
        },
      },
    });

    // 6. Retorna uma resposta de sucesso
    res.status(201).json({
      message: "Conta de administrador criada com sucesso!",
      userId: newAdmin.id,
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);

    // 7. Tratamento de Erros: Verifica se o erro é de e-mail duplicado
    // O código 'P2002' é específico do Prisma para erros de violação de constraints únicas.
    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res.status(409).json({ message: "Este e-mail já está em uso." });
    }

    // Para qualquer outro erro, retorna uma mensagem genérica
    res
      .status(500)
      .json({ message: "Erro interno do servidor ao tentar criar a conta." });
  }
}
