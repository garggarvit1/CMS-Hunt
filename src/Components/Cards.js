import React from 'react';
import Cardsui from './CardUi';
import './Cards.css';
import img3 from"../assest/img/learn.png";
import img2 from "../assest/img/practice.png";
import img1 from "../assest/img/read.png";

const Cards = () => {
  return (
    <div className='contain'>
    <div className='container-fluid d-flex justify-content-center contain-card'>
        <div className='row card-background'>
            <div className='col-md-4'>
                <Cardsui imgsrc={img1} title="What is a clearfix?" link="#" />
            </div>
            <div className='col-md-4'>
                <Cardsui imgsrc={img2} title="Explore Practice Problems" link="#"/>
            </div>
            <div className='col-md-4'>
                <Cardsui imgsrc={img3} title="Interview Preparation" link="#"/>
            </div>
        </div>
</div>
    </div>
  )
}

export default Cards;