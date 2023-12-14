import React from 'react';
import Card from './ImageCard';
import './ImageCarousel.css';
import { useEffect } from 'react';

const ImageCarousel = () => {
    let box;

    useEffect(() => {
        // Access the DOM element after the component has mounted
        box = document.querySelector('.product-container');
    }, []);

    const btnpressnext=()=>{
        if(box){
        let width= box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
        }
        
    };
    const btnpressprev=()=>{
        if(box){
        let width= box.clientWidth;
        box.scrollLeft=box.scrollLeft-width;
        }
    };

  return (
    <div className='image-contain'>
        <div className='product-carousel'>
            <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
            <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

            <div className='product-container'>
               <a href='/main?page=html&subpage=HTML Home' className='product-link'> <Card cardno='1' title='Html'/></a>
               <a href='/main?page=css&subpage=CSS Home' className='product-link'> <Card cardno='2' title='Css'/></a>
               <a href='/main?page=js&subpage=JS HOME' className='product-link'> <Card cardno='3'title='Javascript'/></a>
               <a href='' className='product-link'> <Card cardno='4' title='Sql'/></a>
               <a href='' className='product-link'> <Card cardno='5' title='ReactJs'/></a>
               <a href='' className='product-link'> <Card cardno='6' title='NodeJs'/></a>
               <a href='' className='product-link'> <Card cardno='7' title='Angular'/></a>
               <a href='' className='product-link'> <Card cardno='8' title='NextJs'/></a>
            </div>
        </div>
    </div>
  )
}

export default ImageCarousel