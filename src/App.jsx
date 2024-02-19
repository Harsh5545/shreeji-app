import AppRouter from "./Routes/AppRouter";
import SEO from "./SEO/SEO";
import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
     
      <Navbar />
      <AppRouter />
      <FooterComponent />
    </>
  );
}

export default App;
