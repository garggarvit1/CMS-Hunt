import React from 'react';
import "./NavbarBot.css";
// import home from '../assests/img/house-chimney-solid.svg';
import Html from './Html';
import { Link, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const NavbarBot = () => {
 
  return (
    <>
    <div className='horizontal_wrapper'>
        {/* <div className='horizontal_Nav_left'> */}
        
            <ul>
                {/* <div className='horizontal_btn'>
                <img src={home}/>
                </div> */}
               {/* { {lang}.map((lan)=>(
                <a href="#">{lan}</a>
                ))} */}
                <a href="/main?page=html&subpage=HTML Home" className='horizontal_nav_item' >HTML</a>
                <a href='/main?page=css&subpage=CSS Home' className='horizontal_nav_item' >CSS</a>
                <a href='/main?page=js&subpage=JS HOME' className='horizontal_nav_item' >JAVASCRIPT</a>
                <a href='/main?page=sql&subpage=SQL Home' className='horizontal_nav_item' >SQL</a>
                <a href='/main?page=java&subpage=JAVA Home' className='horizontal_nav_item' >JAVA</a>
                <a href='/main?' className='horizontal_nav_item' >HTML</a>
                <a href='/main?' className='horizontal_nav_item' >CSS</a>
                <a href='/main?' className='horizontal_nav_item' >JAVASCRIPT</a>
                <a href='/main?' className='horizontal_nav_item' >SQL</a>
                <a href='/main?' className='horizontal_nav_item' >JAVA</a>

            </ul>
        </div>
    {/* </div> */}
    </>
  )
}

export default NavbarBot