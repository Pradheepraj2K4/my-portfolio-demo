import React, { useEffect, useRef } from 'react';
import {useGSAP} from "@gsap/react";
import gsap, { Linear } from 'gsap';
import meImage from '../assets/me.jpg';
import codeImage from '../assets/coding.webp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const MainSection = (props) => {
    
    const wrapperRef = useRef();
    
    

    const timeline = gsap.timeline({   // creating a timeline for floating pic animation
        repeat: -1, yoyo:true
    })
    
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        

        gsap.to('.text1',{opacity : 1,y: 0 ,filter: "blur(0px)" ,stagger: 0.2,duration:1,delay:0.5})
        
        gsap.to(".section", {
            xPercent: -100, //to total scroll include 200% to x of each section - allowing the 3rd container to be visible
            ease: "none",
            scrollTrigger: {
            trigger: ".landing-page", //triggers the scroll animation when the homescreen is scrolled
            pin: true, //pins the trigeer element in place {home screen}
            scrub: 1, //the animation will smoothly follow the scrollbar as we scroll
            snap: (progress) => Math.round(progress * 2), // (1/2) total of 200% movement so that, for each 100% it has to snap in place therefor 200/2 = 100%
            end: () => "+=" + wrapperRef.current.offsetWidth
          }
        })
            //floating animation for the profil
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


  return (
    <>
         <div className='h-[90vh] flex relative outer-wrapper   overflow-hidden'> 
             <div className=' w-[90vw] flex justify-between items-center ml-[8%] mr-[5%] mt-[8%] absolute z-60 '>  {/*image wrapper*/}
                 <img id='profile' src={meImage} className=' z-50 w-[25%] rounded-full md:left-20 lg:left-36 left-10 top-10 shadow-lg'></img>
                 <img id='coding-img' src={codeImage} className='h-[15%] rounded-full hidden md:block z-40 w-[15%]  lg:top-40 lg:right-20 md:top-36 md:right-10 shadow'></img>
             </div>

            <div ref={wrapperRef} className='flex wrapper flex-nowrap'> 
                <div  className='w-[100vw] flex section'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> {/*green container*/}
                     <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%] ">
                         <div className="flex-col font-bold text1 blur-md">
                             <h1 className="md:text-3xl lg:text-6xl translate-y-20 opacity-0 text1">Welcome to </h1>
                             <h1 className="text-6xl translate-y-20 opacity-0 text1">My Online Portfolio</h1>
                             <p className='font-light mt-5 translate-y-20 opacity-0 text1'>Hello I'm Pradheep raj a passionate and innovative web developer trying to develop a career in MERN Stack </p>
                             <div className='mt-5 translate-y-20 opacity-0 text1'>
                                 <a className='bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-xl hover:text-black hover:bg-white transition duration-300 ease-out'>Learn More</a>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>

                <div className='w-[100vw]  flex section section-2'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> {/*green container*/}
                     <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%]">
                         <div className="flex-col font-bold ">
                             <h1 className="  md:text-3xl lg:text-6xl">Wanna Contact me? </h1>
                             <h1 className=" text-6xl">Check Below!</h1>
                             <div className='mt-5 '>
                               <div className='grid grid-cols-2 gap-4 w-[50%]'>  
                                <a href='https://www.instagram.com/prxdheep_rajxx?igsh=MTB3NGUzYnJiaTQyYg==' target='_blank'  className= 'flex justify-center items-center group px-1 md:px-4  bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-xl hover:text-black hover:bg-slate-100 transition duration-300 ease-out'>
                                    <svg className='w-8 h-8 inline-block group-hover:fill-black fill-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
                                    <p className='pl-2 hidden lg:block'>Instagram</p>
                                </a> 
                                <a href='https://www.linkedin.com/in/pradheepraj' target='_blank' className= 'flex justify-center items-center group px-1 md:px-4  bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-xl hover:text-black hover:bg-slate-100 transition duration-300 ease-out'>
                                <svg className='w-9 h-8 inline-block group-hover:fill-black fill-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 6 3 C 4.3489059 3 3 4.3489059 3 6 L 3 18 C 3 19.651094 4.3489059 21 6 21 L 18 21 C 19.651094 21 21 19.651094 21 18 L 21 6 C 21 4.3489059 19.651094 3 18 3 L 6 3 z M 6 4 L 18 4 C 19.110906 4 20 4.8890941 20 6 L 20 18 C 20 19.110906 19.110906 20 18 20 L 6 20 C 4.8890941 20 4 19.110906 4 18 L 4 6 C 4 4.8890941 4.8890941 4 6 4 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
</svg>
                                    <p className='pl-2 hidden lg:block'>LinkedIn</p>
                                </a> 
                                <a href='https://github.com/Pradheepraj2K4' target='_blank' className= 'flex justify-center items-center group px-1 md:px-4 bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-xl hover:text-black hover:bg-slate-100 transition duration-300 ease-out'>
                                <svg className='w-9 h-8 inline-block group-hover:fill-black fill-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
</svg>
                                    <p className='pl-2 hidden lg:block'>GitHub</p>
                                </a> 
                                <a href="mailto:pradheepselva111@gmail.com"  target='_blank' className= 'flex justify-center items-center group px-1 md:px-4  bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-xl hover:text-black hover:bg-slate-100 transition duration-300 ease-out'>
                                <svg className='w-9 h-8 inline-block group-hover:fill-black fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mail"><path  d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"></path><path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path></svg>
                                    <p className='pl-2 hidden lg:block'>Email</p>
                                </a> 
                                </div> 
                             </div>
                         </div>
                     </div>
                    </div>
                </div>

              {/*  <div className='w-[100vw]  flex section'>
                 <div className=" w-[90%] mx-auto pl-10 bg-green-300 mt-[20%] rounded-t-3xl"> *?}{/*green container*/}
                     {/* <div className="flex justify-center my-20 mx-auto md:px-20 lg:pl-40 lg:pr-0 max-w-[70%]">
                         <div className="flex-col font-bold ">
                             <h1 className="md:text-3xl lg:text-6xl">Welcome to </h1>
                             <h1 className="text-6xl ">My Online Portfolio</h1>
                             <p className='font-light mt-5 '>Hello I'm Pradheep raj a passionate and innovative web developer try to develop my career in MERN Stack </p>
                             <div className='mt-5  '>
                                 <a className='bg-black p-2 rounded-3xl text-white font-light cursor-pointer hover:shadow-lg transition duration-300 ease-out'>Learn More</a>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>  */}

            </div>
         </div>
    </>
  )
}

export default MainSection;