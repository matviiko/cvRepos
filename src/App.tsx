import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Hello } from './components/Hello/Hello';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { IState } from './shared/interfaces';
import throttle from 'lodash/throttle';
import stateMain from './shared/state'
import './App.scss';

const App: React.FC = () => {
  // eslint-disable-next-line
  const [userState, setUserState] = useState<IState>(stateMain);

  const [isActive, setIsActive] = useState<boolean>(false);

  const onScrollHandler = useCallback(
    throttle(() => {
      const lastScrollY = window.scrollY;
      const topRetreat = 5;

      if (lastScrollY >= topRetreat) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, [onScrollHandler]);

  return (
    <React.Fragment>
      <Header isActive={isActive} />
      <Hello userState={userState} isActive={isActive} />
      <Skills skills={userState.skills} />
      <Experience experience={userState.experience} />
      <Education education={userState.education} />
      <Portfolio portfolio={userState.portfolio} />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
