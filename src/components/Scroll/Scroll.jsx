'use client'
import Image from "next/image";
import scroll from '@icons/mouse.png';
import { useEffect, useRef } from "react";

const Scroll = ({to, classname}) => {

    const element = useRef();

    useEffect(() => {
        element.current = document.querySelector(to);
    }, []);

    function handleClick(e) {
        element.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <span onClick={handleClick} className={classname}>
            <Image src={scroll} alt=''/>
            <span>Далее</span>
        </span>
    );
};

export default Scroll;