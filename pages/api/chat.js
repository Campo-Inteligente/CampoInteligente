export default async function handler(req, res) {
  // Garante que o método seja POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  // Pega os dados enviados pelo frontend (ChatWidget.js)
  const { session_id, mensagem } = req.body;

  // Define a URL real
  const REAL_API_URL = "http://45.236.189.2:5000/webchat";

  try {
    // Encaminha a requisição para a API
    const apiResponse = await fetch(REAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: session_id,
        mensagem: mensagem,
      }),
    });

    if (!apiResponse.ok) {
      // Se a API real retornar um erro, repassa o erro
      throw new Error(`Erro da API externa: ${apiResponse.statusText}`);
    }

    // Pega a resposta da API real e a envia de volta para o frontend
    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro no proxy da API /api/chat:", error);
    res
      .status(500)
      .json({ resposta: "Desculpe, ocorreu um erro no nosso servidor." });
  }
}
