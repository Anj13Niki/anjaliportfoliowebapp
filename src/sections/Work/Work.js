import React from 'react'
import './Work.css';
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const Work = () => {
  return (
    <>
        <section id='work'>
        <h2>Let's Connect!!......</h2>
            <h2><p>Start by saying Hello &#128075;....</p></h2>
            <div className='work'>
            <h3>I write technical blogs here......</h3>
            <div className='visit'>
                <a href='https://whatanjali.hashnode.dev/'><BsArrowUpRightCircleFill className='arrow'/></a>
            </div>
            </div>
        </section>
    </>
  )
}

export default Work
