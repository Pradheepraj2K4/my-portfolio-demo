import React from 'react';
import { useState } from 'react';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';

//style for the nav links for medium and larger screen
const linkStyle =  `hidden md:block m-3 md:m-2 md:px-4 lg:px-14 md:px-8 sm:px-10 py-1.5 border rounded-2xl ease-in transition duration-300 hover:bg-green-300  hover:text-gray-900 hover:cursor-pointer`;

const NavContainer = () => {

    //for hamburger icon clicked or not
    const [menuClicked,setMenuClicked] = useState(false);

    //animate the vertical menu bar with nav links(smaller screens) 
    useGSAP(()=>{
        gsap.from('#menu',{
            x:200,
        })
    },[menuClicked]) 

    const [navLinks,setnavLinks] = useState([
        {label:"Home", isClicked : true},
        {label:"About Me", isClicked : false},
        {label:"Portfolio", isClicked : false},
        {label:"Hire Me!", isClicked : false}
    ])
    //to update the clicked properties of nav links
    const handleNavClicks = (clickedLink)=> {
        setnavLinks(prevState => 
            prevState.map((link)=>
                clickedLink.label==link.label? {...link,isClicked:true} : {...link,isClicked:false}
            )
        )
    }

  return (
    <>
    <div className= "h-[10vh] mx-auto my-auto relative">
        <nav className = "flex h-full justify-between text-white items-center mx-[5%]">
            <div className='flex'>
                <div className='bg-green-300 w-6 rounded-[100%] mr-4'></div>
                <h1>PRADHEEPRAJ S</h1>
            </div>
            <ul className='flex justify-between'>
                {navLinks.map((link) => {                                                       //to higlight the nav menus when they are clicked
                   return <li onClick={()=>handleNavClicks(link)} key={link.label} className={`${link.isClicked? "bg-green-300 text-gray-900" : ""} ${linkStyle}`}>
                    <a >{link.label}</a>
                    </li>
                })}
            </ul>
                                                                                                                                                          { /* to show and hide the haburger menu icon */ } 
            <svg onClick={()=> setMenuClicked(!menuClicked)} viewBox="0 0 100 80" width="40" height="40" className = {`cursor-pointer md:hidden fill-white w-6 ${!menuClicked? "block" : "hidden"}`}   >
                <rect width="100" height="10" rx="10"></rect>
                <rect y="30" width="100" height="10" rx="10"></rect>
                <rect y="60" width="100" height="10" rx="10"></rect>
            </svg>                                                                                  { /* to show and hide the close icon */ }
            <svg onClick={()=> setMenuClicked(!menuClicked)} className = {`cursor-pointer md:hidden ${menuClicked? "block" : "hidden"}`}   xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </nav>
    </div>
    <div className={`bg-white-200  md:hidden flex justify-end relative p-8 ${menuClicked? "flex" : "hidden"}`}>
        <ul id='menu' className='flex flex-col justify-between shadow-xl w-[50%] backdrop-blur bg-slate-700/20  rounded-l-lg absolute z-50 top-0 right-0 items-center p-8'>
                {navLinks.map((link) => {
                   return <div key={link.label} className='border-b w-full flex items-center'>
                                <li  onClick={()=>handleNavClicks(link)} className=" md:hidden text-white mx-auto my-5 sm:px-10 px-4 py-3  hover:scale-125 transition duration-300 ease-in hover:cursor-pointer">
                                    <a >{link.label}</a>
                                </li>
                            </div>
                })}
        </ul>
    </div>
    </>
  )
}

export default NavContainer