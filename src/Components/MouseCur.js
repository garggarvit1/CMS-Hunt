import React from 'react';
import './MouseCur.css';
import gsap from 'gsap';

const MouseCur = () => {
    let crsr = document.querySelector("#cursor");
    let blur = document.querySelector("#cursor-blur");
    document.addEventListener('mousemove', (e) => {
        crsr.style.zIndex = 99;
        crsr.style.left = e.x + 15 + "px";
        crsr.style.top = e.y + 15 + "px";
        blur.style.left = e.x - 150 + "px";
        blur.style.top = e.y - 150 + "px";
    });

    var h4all = document.querySelectorAll("p a");
    h4all.forEach((elem) => {
        elem.addEventListener("mouseenter", function () {
            crsr.style.scale = 3;
            crsr.style.border = "1px solid #FFF";
            crsr.style.backgroundColor = "transparent";

        })
        elem.addEventListener("mouseleave", function () {
            crsr.style.scale = 1;
            crsr.style.border = "0px solid #95C11E";
            crsr.style.backgroundColor = "#95C11E";

        })
    });

    return (
        <>
            <div id='cursor'></div>
            <div id='cursor-blur'></div>
        </>

    )
}

export default MouseCur