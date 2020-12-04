import React, { useEffect } from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./Style/Reset.css";
import "./Style/App.css";

export default function App() {
  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "pt");
    }
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
