import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Footer from './sections/Footer/Footer'
import Header from './sections/Header/Header'
import Portfolio from './sections/portfolio/Portfolio'
// import DarkMode from './sections/darkmode/DarkMode'
import './index.css'
import Skills from './sections/skills/Skills'
import Work from './sections/Work/Work'


export default function App(){
    return(
        <>
            <main>
                <Navbar/>
                {/* <DarkMode/> */}
                <Header/>
                <div className='abandsk'>
                    <Skills/>
                    <About/>
                </div>
                <Portfolio/>
                <div className='pandw'>
                    <Work/>
                    <Contact/>
                </div>
                
                <Footer/>
                
            </main>
        </>
    )
}