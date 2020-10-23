import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Hello } from './components/Hello/Hello';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Portfolio } from './components/Portfolio/Portfolio';
import {Contact} from "./components/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
