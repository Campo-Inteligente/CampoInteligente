import { serialize } from "cookie";

export default function handler(req, res) {
  // Pega o nome do token do cookie. DEVE ser o mesmo nome usado no login.
  const tokenName = 'auth_token';

  // Cria um novo cookie com o mesmo nome, mas com uma data de validade no passado.
  // Isso instrui o navegador a deletar o cookie imediatamente.
  const cookie = serialize(tokenName, '', {
    maxAge: -1, // Define a "idade máxima" como -1 para expirar o cookie
    path: '/', // O caminho DEVE ser o mesmo do cookie original
    
    // As opções de segurança também devem corresponder ao cookie original
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
  });

  // Define o cabeçalho 'Set-Cookie' na resposta para enviar a instrução ao navegador
  res.setHeader('Set-Cookie', cookie);

  // Envia uma resposta de sucesso
  res.status(200).json({ message: 'Logout realizado com sucesso.' });
}