// pages/api/users/delete.js
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  // Apenas aceita requisições do tipo POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { ids } = req.body;

  // Validação básica
  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return res
      .status(400)
      .json({ message: "Nenhum ID de usuário foi fornecido." });
  }

  try {
    const deleteResult = await prisma.tb_usuarios.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    // Se nenhum usuário foi deletado (talvez os IDs não existiam), ainda é um sucesso.
    if (deleteResult.count > 0) {
      return res
        .status(200)
        .json({
          message: `Sucesso: ${deleteResult.count} usuário(s) excluído(s).`,
        });
    } else {
      return res
        .status(404)
        .json({ message: "Nenhum usuário encontrado com os IDs fornecidos." });
    }
  } catch (error) {
    console.error("Falha ao excluir usuários:", error);
    return res
      .status(500)
      .json({
        message: "Erro interno do servidor ao tentar excluir usuários.",
      });
  }
}
