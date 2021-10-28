import React from "react";
import Header from "./components/header/header";
import { BrowserRouter } from "react-router-dom";
import App from "./app.js"



const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
        {/* <Footer /> */}
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default Main;
