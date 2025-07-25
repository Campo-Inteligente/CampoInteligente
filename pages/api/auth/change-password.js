import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId, currentPassword, newPassword } = req.body;

  if (!userId || !currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    // 1. Encontra o usuário no banco de dados
    const admin = await prisma.tb_administradores.findUnique({
      where: { id: userId },
    });

    if (!admin) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // 2. Compara a senha atual fornecida com a senha hasheada no banco
    const isPasswordCorrect = await bcrypt.compare(currentPassword, admin.senha_hash);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'A senha atual está incorreta.' });
    }

    // 3. Cria o hash da nova senha
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // 4. Atualiza a senha do usuário no banco de dados
    await prisma.tb_administradores.update({
      where: { id: userId },
      data: { senha_hash: hashedNewPassword },
    });

    res.status(200).json({ message: 'Senha alterada com sucesso!' });
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}