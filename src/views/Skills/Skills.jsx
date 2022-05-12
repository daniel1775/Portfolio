import Slide from './components/Slide.jsx';

import style from './Skills.module.css';

import reactIcon from '../../assets/img/react-icon.svg';
import cssIcon from '../../assets/img/css-icon.svg';
import jsIcon from '../../assets/img/js-icon.svg';
import htmlIcon from '../../assets/img/html-icon.svg';
import gitIcon from '../../assets/img/git-icon.svg';
import githubIcon from '../../assets/img/github-icon.svg';
import figmaIcon from '../../assets/img/figma-icon.svg';
import mongoIcon from '../../assets/img/mongo-icon.svg';

import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useRef } from 'react';

export default function Skills(){
  const slideShow = useRef(null);

  function previous() {
    const slideSize = slideShow.current.children[0].offsetWidth;
    const firstElement = slideShow.current.children[0];

    if(slideShow.current.children.length > 0){
      slideShow.current.style.transform = `translate(${0}px)`;
    }
  }

  function next() {
    const slideSize = slideShow.current.children[0].offsetWidth;
    
    if(slideShow.current.children.length > 0){
      slideShow.current.style.transform = `translate(-${slideSize}px)`;
    }
  }

  function transitionFirstElement(){
    slideShow.current.style.transition = 'none';
    slideShow.current.style.transform = `translateX(0)`;
  }

  console.log(slideShow.current);

  //slideShow.current.addEventListener('transitionend');

  const data = [
    {
      "title": "React JS",
      "image": reactIcon
    },
    {
      "title": "CSS",
      "image": cssIcon
    },
    {
      "title": "JavaScript",
      "image": jsIcon
    },
    {
      "title": "HTML",
      "image": htmlIcon
    },
    {
      "title": "GIT",
      "image": gitIcon
    },
    {
      "title": "GitHub",
      "image": githubIcon
    },
    {
      "title": "Figma",
      "image": figmaIcon
    },
    {
      "title": "MongoDB",
      "image": mongoIcon
    },
  ];

  return(
    <section className={style.skills}>
      <h2 className={style.skills_title}>
        MY SKILLS
        <hr />
      </h2>
      <div className={style.slider_container} ref={slideShow}>
        {data.map((element, index) => (
          <Slide 
            key={index}
            data={element}
          /> 
        ))}
      </div>
      <div className={style.panel_arrows}>
        <button 
          className={`${style.button} ${style.arrow_left}`}
          onClick={previous}
        >
          <HiOutlineChevronLeft />
        </button>
        <button 
          className={`${style.button} ${style.arrow_left}`}
          onClick={next}
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
}