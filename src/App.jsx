import { useState } from "react";
import MainComponent from "./components/custom/mainComponent";
import SEO from "./SEO/SEO";

function App() {
  const pageTitle = "Welcome To HDF Online";
  const pageDescription = "Your page description";
  const pageURL = "Your page URL";
  const pageImageURL = "URL to your image";


  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageURL}
        image={pageImageURL}
      />
      <MainComponent />
    </>
  );
}

export default App;
