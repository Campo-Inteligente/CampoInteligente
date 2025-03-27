import '../styles/globals.css';
import '../styles/sobre.css';

function MyApp({ Component, pageProps }) {
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
