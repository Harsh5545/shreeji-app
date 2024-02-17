import AppRouter from "./Routes/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageURL}
        image={pageImageURL}
      />
      <Navbar/>
      <AppRouter />
    </>
  );
}

export default App;
