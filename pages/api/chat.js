export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { session_id, message } = req.body;

  const REAL_API_URL = process.env.REAL_API_URL;

  const requestBodyJson = JSON.stringify({
    session_id: session_id,
    message: message,
  });

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
