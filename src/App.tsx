import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Hello} from "./components/Hello/Hello";
import {Skills} from "./components/Skills/Skills";
import {Experience} from "./components/Experience/Experience";

const App: React.FC = () => {
  return (
      <>
          <Header />
          <Hello/>
          <Skills/>
          <Experience />
          <Footer/>
      </>
  );
}

export default App;
