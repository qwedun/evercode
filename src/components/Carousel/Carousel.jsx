'use client'
import {useEffect, useRef, useState} from "react";
import rightArrow from '@icons/arrow-right.svg';
import leftArrow from '@icons/arrow-left.svg';
import styles from './carousel.module.scss'
import Image from "next/image";

function Carousel({mobileOnly, children}) {

    const slider = useRef(null);
    const [isMobile, setIsMobile] = useState(!mobileOnly);

    let isDown, startX, scrollLeft = 0, index = 0, timestamp, width;

    function mouseDown(e) {
        isDown = true;
        startX = e.pageX || e.touches[0].pageX - slider.current.offsetLeft;
        scrollLeft = slider.current.scrollLeft;
        timestamp = Date.now();
        width = slider.current.querySelector('#carousel-element-width').offsetWidth;
    }

    function mouseUp() {
        isDown = false;

        if (Date.now() - timestamp > 300 || scrollLeft - slider.current.scrollLeft === 0) {
            scroll()
        } else if (scrollLeft - slider.current.scrollLeft < 0 && index !== children.length) {
            index += 1;
            scroll();
        } else if (index !== 0) {
            index -= 1;
            scroll();
        }
    }

    function mouseMove(e) {
        slider.current.style.cursor = 'grab';
        if (!isDown) return;
        const x = e.pageX || e.touches[0].pageX - slider.current.offsetLeft;
        const walk = x - startX;
        slider.current.scrollLeft = scrollLeft - walk;
        slider.current.style.cursor = 'grabbing';
    }

    function scroll() {
        slider.current.scrollTo({
            left: width * index,
            behavior: 'smooth'
        })
    }

    function handleClick(type) {
        if (type === 'right' && index !== children.length) {
            index += 1;
            scroll();
        } else if (index !== 0) {
            index -= 1;
            scroll();
        }
    }

    useEffect(() => {
        if (!mobileOnly)
            return
        setIsMobile(window.innerWidth < 748)
    }, []);

    useEffect(() => {

        let sliderRef = slider.current;
        if (!sliderRef) return
        width = slider.current.querySelector('#carousel-element-width').offsetWidth;

        sliderRef.addEventListener("touchstart", mouseDown);
        sliderRef.addEventListener("touchend", mouseUp);
        sliderRef.addEventListener("touchmove", mouseMove);

        sliderRef.addEventListener("mousedown", mouseDown);
        sliderRef.addEventListener("mouseup", mouseUp);
        sliderRef.addEventListener("mousemove", mouseMove);

        return () => {
            sliderRef.removeEventListener("touchstart", mouseDown);
            sliderRef.removeEventListener("touchend", mouseUp);
            sliderRef.removeEventListener("touchmove", mouseMove);

            sliderRef.removeEventListener("mousedown", mouseDown);
            sliderRef.removeEventListener("mouseup", mouseUp);
            sliderRef.removeEventListener("mousemove", mouseMove);
        };
    }, [isMobile]);

    if (!isMobile)
        return children

    return (
        <div className={`${styles.carousel} ${mobileOnly ? styles.small : ''}`}>
            <div className={styles.window} ref={slider}>
                {children}
            </div>
            <div onClick={() => handleClick('left')}  className={`${styles.left} ${styles.arrow}`}>
                <Image src={leftArrow} alt=''/>
            </div>
            <div onClick={() => handleClick('right')} className={`${styles.right} ${styles.arrow}`}>
                <Image src={rightArrow} alt=''/>
            </div>
        </div>
    );
}
export default Carousel