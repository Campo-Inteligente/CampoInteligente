import '../styles/globals.css';
import '../styles/sobre.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Scroll para o topo ao trocar de rota
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // ou apenas window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
