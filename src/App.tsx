import React, {useState} from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Hello} from './components/Hello/Hello';
import {Skills} from './components/Skills/Skills';
import {Experience} from './components/Experience/Experience';
import {Education} from './components/Education/Education';
import {Portfolio} from './components/Portfolio/Portfolio';
import {Contact} from "./components/Contact/Contact";
import {IState} from "./shared/interfaces";

const App: React.FC = () => {
  const [userState, setUserState] = useState<IState>({
    firstName: 'Matvii',
    text: 'Text for home',
    lastName: 'Kopchak',
    phone: '+380964960758',
    email: 'matviy.kopchak@gmail.com',
    address: 'Ivano-Frankivsk Ukraine',
    social: {
      facebook: 'www.facebook.com/matviy.kopchak',
      instagram: 'www.instagram.com/matviikoo',
      linkedin: 'www.linkedin.com/in/matvii-kopchak-99a0b2138/',
      github: 'www.github.com/matviiko',
    },
    skills: {
      title: 'Skills',
      text: 'Text about Skills',
      skills: {
        html5: true,
        css3: true,
        javascript: true,
        typescript: true,
        sass: true,
        react: true,
        angular: true,
        bootstrap: true,
        materialUi: true,
      }
    },
    experience: {
      title: 'Experience',
      text: 'Text for Experience',
      items: [
        {
          title: 'Javascript Developer',
          company: 'Freelance',
          date: 'March 2020 - Present',
          text: 'Text about my experience'
        },
        {
          title: 'Javascript Developer',
          company: 'Freelance',
          date: 'March 2020 - Present',
          text: 'Text about my experience'
        }
      ]
    },
    education: {
      title: 'Education',
      text: 'Text for Education',
      items: [
        {
          title: 'Geology oil and gas',
          company: 'Ivano-Frankivsk National Technical University of Oil and Gas',
          date: 'July 2010 - July 2010',
          text: 'Text about my education'
        },
        {
          title: 'Javascript Developer',
          company: 'Freelance',
          date: 'March 2020 - Present',
          text: 'Text about my experience'
        }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      portfolioItems: [
        {
          title: 'Web Blog',
          text: 'text about Website',
          "url_img": '../../image/website.jpg',
          github_url: 'url',
          technology: {
            html5: true,
            css3: true,
            typescript: true,
            sass: true,
            angular: true,
            bootstrap: true,
            materialUi: true,
            firebase: true
          }
        },
        {
          title: 'Title website',
          text: 'text about Website',
          url_img: '',
          github_url: 'url',
          technology: {
            html5: true,
            css3: true,
            typescript: true,
            sass: true,
            angular: true,
            bootstrap: true,
            materialUi: true,
            firebase: true
          }
        }
      ]
    }
  })

  return (
    <>
      <Header/>
      <Hello userState={userState} />
      <Skills skills={userState.skills}/>
      <Experience experience={userState.experience}/>
      <Education education={userState.education}/>
      <Portfolio portfolio={userState.portfolio} />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
