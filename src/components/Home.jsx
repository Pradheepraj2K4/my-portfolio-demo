import React, { useRef } from 'react';
import NavContainer from './NavContainer';
import MainSection from './MainSection';
const Home = () => {
  const homeContainer = useRef(); // reference to the whole home screen for pinning 
  return (
    <>
    <div className='h-screen landing-page' ref={homeContainer}>
         <NavContainer ></NavContainer>
         <MainSection homeRef ={homeContainer}></MainSection> 
    </div>
    </>
  )
}

export default Home