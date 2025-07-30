import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ChatWidget from "../components/ChatWidget";

// Importação da fonte via next/font
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-poppins", // Se quiser usar via CSS também
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

   // DEFINE AS ROTAS ONDE O CHAT DEVE APARECER ---
  const chatWidgetPaths = ["/sobre", "/contato", "/home"];

  // VERIFIQUA SE A ROTA ATUAL ESTÁ NA LISTA ---
  const showChatWidget = chatWidgetPaths.includes(router.pathname);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Scroll para o topo ao trocar de rota
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <main className={poppins.className}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
        <ChatWidget /> 
      </div>
    </main>
  );
}

export default MyApp;
