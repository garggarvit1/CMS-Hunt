import React from 'react';
import img1 from "../assest/img/learn.png";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { LoremIpsum } from 'react-lorem-ipsum'
import "./CardUI.css"
const CardUi = ( props) => {
  return (
    <div>
        <div className='card text-center'>
            <a className='anchor' href={props.link}>
           <div className='overflow image'>
                <img src={props.imgsrc} alt='learn image' className='card-img-top'/>
            </div>
            <div className='card-body text-white card-size'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas justo vel eros tristique mattis. 
                In mattis tristique purus eu accumsan. 
                </p>
            </div>
            </a>
 
        </div>
    </div>
  )
}

export default CardUi