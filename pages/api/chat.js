
export default async function handler(req, res) {
  // 1. Apenas permitir requisições POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // 2. Pegar os dados que o seu frontend enviou (ex: a mensagem do usuário)
    const body = req.body;

    // 3. O SEU BACKEND faz a chamada para a API externa (sem CORS aqui!)
    const apiResponse = await fetch("http://45.236.189.2:5000", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Adicione aqui outros headers que a API externa possa exigir
      },
      body: JSON.stringify(body), 
    });

    // 4. Se a API externa não responder com sucesso, repasse o erro
    if (!apiResponse.ok) {
      throw new Error(`Error from external API: ${apiResponse.statusText}`);
    }

    // 5. Enviar a resposta da API externa de volta para o seu frontend
    const data = await apiResponse.json();
    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}