import React from "react";

import { IoMdArrowDropupCircle } from "react-icons/io";
import { animateScroll as scroll } from 'react-scroll';

export default function BtnBackToTop() {
    const backToTopButton = document.querySelector('.iconUp')

    const returnToTop = () => {
        scroll.scrollToTop();
    }

    const showbackToTop = () => {
        if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
        } else {
    backToTopButton.classList.remove('show')
    }
    }

    window.addEventListener('scroll', function () {
    showbackToTop()
    })
    return (
        <>
            <IoMdArrowDropupCircle className="iconUp" size={40} onClick={returnToTop}/>
        </>
    )
}