import React, { useState, useEffect } from "react";
import AppRouter from "./Routes/AppRouter";
import SEO from "./SEO/SEO";
import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Loader from "./Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const fakeAsyncOperation = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  };
  useEffect(() => {
    fakeAsyncOperation();
  }, []);

  return (
    <>
      <div className="">
        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <>
            <Navbar />
            <AppRouter />
            <FooterComponent />
          </>
        )}
      </div>
    </>
  );
}

export default App;
