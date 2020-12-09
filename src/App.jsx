import React from 'react';

import LanguageProvider from "./Context/Language";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./Style/Reset.css";
import "./Style/App.css";

export default function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Main />
        <Footer />
      </LanguageProvider>
    </>
  );
}
