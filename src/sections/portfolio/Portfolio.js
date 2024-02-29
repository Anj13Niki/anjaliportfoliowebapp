import React, { useState } from 'react';
import './Portfolio.css';
import ScreenText from './ScreenText';
import Banner from '../banner/Banner';

const scrollData = [
    {
        id:1,
        heading:'Blog Web App',
        descp:'Blogging Platform is a full-stack responsive single-page app connected to realtime database, where you can run your blog after creating an account for free.It is created with the help of ReactJS and Firebase.',
        img:"https://i.postimg.cc/DwQTtrCR/Blog.jpg",
        link1:"https://github.com/Anj13Niki/budgetwebapp",
        link2:"https://budgetwebapp.vercel.app/"
    },
    {
        id:2,
        heading:'Shrubit',
        descp:'An ecommerce website for plant nursery which is implemented with the help of ReactJS and Firebase.Shopping cart option is also provided in this website.',
        img:'https://i.postimg.cc/ZqjPDwtb/ecom.jpg',
        link1:"https://www.instagram.com/reel/CwIlYHlLjcD/?igshid=MzRlODBiNWFlZA==",
        link2:"https://ecomwebapp-h18j.vercel.app/"
    },
    {
        id:3,
        heading:'CRED UI Clone',
        descp:'CRED landing page clone built using ReactJS.',
        img:'https://i.postimg.cc/3xGYBqGG/cred.jpg',
        link1:'credclone-murex.vercel.app',
        link:'https://github.com/Anj13Niki/credclone'
    },
    {
        id:4,
        heading:'TIC TAC TOE',
        descp:'Tic Tac Toe game designed using HTML, CSS and JS.Creating a game with javascript is the most fun way to learn. It will keep you motivated and that is crucial for learning complex skills like web development.',
        img:'https://i.postimg.cc/K8CrX14V/tictac.jpg',
        link1:"https://anj13niki.github.io/Tic-Tac-Toe/",
        link2:"https://github.com/Anj13Niki/Tic-Tac-Toe",
    },
    {
        id:5,
        heading:'Paasword Generator',
        descp:'Developed random password generator with the help of JavaScript.The Password generator tool creates a random and customized password for users that helps them to create a strong password which provides greater security.',
        img:'https://i.postimg.cc/L8v7pBjX/Password-Gen.jpg',
        link1:"https://anj13niki.github.io/Password-Generator/",
        link2:"https://github.com/Anj13Niki/Password-Generator",
    }
]

const MobileScroll = () => {
  const [currimg,setcurrimg] = useState(0);
  return (
    <>
    <Banner/>
         <div className='mobile-scroll flex max-width' id='portfolio'>
     
     <div className='scroll-fullscreen-wrapper'>
       {scrollData.map((screen,i)=>{
           return(
               <div className='fullscreen'>
               <ScreenText screen={screen} i={i} setcurrImage={setcurrimg}/>
           </div>
           )
           
       })}
     </div>
     <div className='mobile-fullscreen non-mobile'>
     <div className='mobile-screens'>
       <div className='mobile-mockup-screen flex absolute-center'>
           <img src={scrollData[currimg].img} alt='mobile-screensimg' className='mobile-screen-image slide-right'
               key={scrollData[currimg].id}
           />
       </div>
     </div>
     </div>
   </div>
    </>
   
  )
}

export default MobileScroll
