import React from 'react';
import './banner.css';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div className='banner'>
      <Marquee play>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
        <div className='wrapper'>
            <span className='work'>WORK</span>
            <span className='section'>SECTION</span>
        </div>
      </Marquee>
    </div>
  )
}

export default Banner
