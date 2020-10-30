import React, {useState} from 'react';
import './App.scss';
import {Header} from './component/Header/Header';
import {Footer} from './component/Footer/Footer';
import {Hello} from './component/Hello/Hello';
import {Skills} from './component/Skills/Skills';
import {Experience} from './component/Experience/Experience';
import {Education} from './component/Education/Education';
import {Portfolio} from './component/Portfolio/Portfolio';
import {Contact} from "./component/Contact/Contact";
import {IState} from "./shared/interfaces";

const App: React.FC = () => {
  // eslint-disable-next-line
  const [userState, setUserState] = useState<IState>({
    firstName: 'Matvii',
    text: 'Hello, my name is Matvii, I am 28, I am a Frontend developer, I like to create new and interesting apps. My goal is to become a high-level Frontend developer in this area. I would like to improve my skills in Angular and React JS . At the moment I work as a freelancer. I am looking for a reputable where I would get a chance to develop my skills through getting interesting and challenging tasks. I am a team player, thus I would love to join a team of the same-minded colleagues.',
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
      text: 'In this part you can see what skills I have. Every day I try to develop and improve them.',
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
        github: true,
        ubuntu: true,
      }
    },
    experience: {
      title: 'Experience',
      text: 'I am a Junior FrontEnd Developer growth skills with Angular and ReactJS',
      items: [
        {
          title: 'FrontEnd Developer',
          company: 'Freelance',
          date: 'March 2020 - Present',
          text: 'Development of responsive (adaptive) pages, blogs, landing pages. Optimization for search engines'
        }
      ]
    },
    education: {
      title: 'Education',
      text: `In this section you will see a list where I studied and what licenses I have. I'm going to learn more and  expand it more`,
      items: [
        {
          title: 'Geology oil and gas',
          company: 'Ivano-Frankivsk National Technical University of Oil and Gas',
          date: 'July 2010 - July 2015',
          text: ''
        },
        {
          title: 'Angular 9.Theory and Practice 2020.',
          company: 'Udemy: Online Courses',
          date: 'June 2020',
          text: 'Certificate NO: UC-1c52a56c-1e26-4260-874c-696ed8eb97f2'
        },
        {
          title: 'React JS. Practical Course 2020 (Hooks, Classes, Redux)',
          company: 'Udemy: Online Courses',
          date: 'October 2020',
          text: 'Certificate NO: UC-1c52a56c-1e26-4260-874c-696ed8eb97f2'
        }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      portfolioItems: [
        {
          title: 'Blog (Angular 9)',
          text: 'This app was created using the Angular Bootstrap and preprocessor SASS. Firebase was used for the backend. Its my first app when I used Angular 9+',
          url_img: '/image/blog.png',
          github_url: 'github.com/matviiko/BlogProject',
          website: 'https://blog-project-beta.vercel.app/',
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
          title: 'Organizer',
          text: 'when you need to note something. You can use organizer. in app you will see all task which you wrote',
          url_img: '/image/organizer.png',
          github_url: 'github.com/matviiko/organizer',
          website: 'https://organizer-seven.vercel.app',
          technology: {
            html5: true,
            css3: true,
            typescript: true,
            sass: true,
            angular: true,
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
