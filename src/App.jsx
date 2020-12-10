import React from 'react';

import LanguageProvider from "./Context/Language";
import BrushProvider from "./Context/BrushOptions";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./Style/Reset.css";
import "./Style/App.css";

export default function App() {
  return (
    <>
      <LanguageProvider>
        <BrushProvider>
          <Header />
          <Main />
          <Footer />
        </BrushProvider>
      </LanguageProvider>
    </>
  );
}
