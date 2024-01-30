import React from 'react';
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <section id='skills'>
    <h2>Skills</h2>
    <div className='set1'>
    <FaHtml5 className='skill1' />
    <FaCss3Alt className='skill2'/>
    <RiJavascriptFill className='skill3'/>
    <SiMui className='skill4' />
    </div>
    <div className='set1'>
    <RiReactjsFill className='skill4' />
    <BsFillBootstrapFill className='skill5'/>
    <DiJava className='skill3'/>
    </div>
    <div className='set1'>
    <FaNode className='skill6' />
    <SiMysql className='skill4'/>
    <SiStyledcomponents className='skill7'/>
    </div>
    <div className='set1'>
    <SiFirebase className='skill8' />
    </div>
    </section>
  )
}

export default Skills
