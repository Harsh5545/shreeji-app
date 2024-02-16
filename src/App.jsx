
import MainComponent from "./components/custom/mainComponent";
import SEO from "./SEO/SEO";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const pageTitle = "Welcome To ShreejiGraphics";
  const pageDescription = "Your page description";
  const pageURL = "Your page URL";
  const pageImageURL = "URL to your image";

  return (
    <>
      {/* <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageURL}
        image={pageImageURL}
      /> */}
      <Navbar/>
      <Home />
    </>
  );
}

export default App;
