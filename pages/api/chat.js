export default async function handler(req, res) {
  // Garante que o método seja POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  // Pega os dados enviados pelo frontend (ChatWidget.js)
  // AGORA USAMOS 'message' AQUI TAMBÉM!
  const { session_id, message } = req.body;

  // Define a URL real da sua API Django para o webchat
  const REAL_API_URL = "http://campointeligente.ddns.com.br:21083/api/v1/chatbot/webchat/";
  //const REAL_API_URL = "http://localhost:8000/api/v1/chatbot/webchat/";

  const requestBodyJson = JSON.stringify({
    session_id: session_id,
    message: message, // A variável 'message' (já desestruturada) está sendo usada aqui
  });

  // Linha de debug (pode remover depois)
  console.log("JSON REAL ENVIADO PELO PROXY:", requestBodyJson);

  try {
    const apiResponse = await fetch(REAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBodyJson,
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error(
        "Erro da API externa (Django):",
        apiResponse.status,
        errorData
      );
      throw new Error(
        `Erro da API externa: ${apiResponse.statusText} - ${JSON.stringify(
          errorData
        )}`
      );
    }

    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro no proxy da API /api/chat:", error);
    res
      .status(500)
      .json({ resposta: "Desculpe, ocorreu um erro no nosso servidor." });
  }
}
