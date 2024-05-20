import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap, { Linear } from 'gsap';
import meImage from '../assets/me.jpg';
import codeImage from '../assets/coding.webp';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const MainSection = () => {
    const timeline = gsap.timeline({
        repeat: -1, yoyo:true
    })
    useGSAP(()=>{
        timeline.to('#profile',{
            x:2,
            y:2,
            duration:1,
            ease: Linear
        })
        timeline.to('#profile',{
            x:2,
            y:-2,
            duration:1,
            ease: Linear
        })
        timeline.to('#profile',{
            x:-2,
            y:-2,
            duration:1,
            ease: Linear
        })
    },[])
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        let totalWidth = 0;
    
        sections.forEach(section => {
          totalWidth += section.offsetWidth;
        });
    
        gsap.to('.wrapper', {
          x: () => `-${totalWidth - window.innerWidth}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: ".wrapper",
            pin: true,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }, []);
  return (
    <>
         <div className='h-[90vh] flex relative outer-wrapper container'>   
             <div className=' w-[90vw] flex justify-between items-center ml-[8%] mr-[5%] mt-[8%] absolute z-60 '>  {/*image wrapper*/}
                 <img id='profile' src={meImage} className=' z-50 w-[25%] rounded-full md:left-20 lg:left-36 left-10 top-10 shadow-lg'></img>
                 <img id='coding-img' src={codeImage} className='h-[15%] rounded-full hidden md:block z-40 w-[15%]  lg:top-40 lg:right-20 md:top-36 md:right-10 shadow'></img>
             </div>
            <div className='flex w-[300vw] wrapper'>
                <div  className='w-[100vw] flex section'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> {/*green container*/}
                     <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%]">
                         <div className="flex-col font-bold">
                             <h1 className="md:text-3xl lg:text-6xl">Welcome to </h1>
                             <h1 className="text-6xl">My Online Portfolio</h1>
                             <p className='font-light mt-5'>Hello I'm Pradheep raj a passionate and innovative web developer trying to develop a career in MERN Stack </p>
                             <div className='mt-5 '>
                                 <a className='bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-lg transition duration-300 ease-out'>Learn More</a>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
                <div className='w-[100vw] flex section'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> {/*green container*/}
                     <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%]">
                         <div className="flex-col font-bold">
                             <h1 className="md:text-3xl lg:text-6xl">Welcome to </h1>
                             <h1 className="text-6xl">My Online Portfolio</h1>
                             <p className='font-light mt-5'>Hello I'm Pradheep raj a passionate and innovative web developer try to develop my career in MERN Stack </p>
                             <div className='mt-5 '>
                                 <a className='bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-lg transition duration-300 ease-out'>Learn More</a>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
                <div className='w-[100vw] flex section'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> {/*green container*/}
                     <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%]">
                         <div className="flex-col font-bold">
                             <h1 className="md:text-3xl lg:text-6xl">Welcome to </h1>
                             <h1 className="text-6xl">My Online Portfolio</h1>
                             <p className='font-light mt-5'>Hello I'm Pradheep raj a passionate and innovative web developer try to develop my career in MERN Stack </p>
                             <div className='mt-5 '>
                                 <a className='bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-lg transition duration-300 ease-out'>Learn More</a>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default MainSection;