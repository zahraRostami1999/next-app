"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import slide1 from "@/assets/images/slideShow/1.jpg";
import slide3 from "@/assets/images/slideShow/3.jpg";
import slide4 from "@/assets/images/slideShow/4.webp";
import slide5 from "@/assets/images/slideShow/5.png";

function SlideShow() {
    const [currentImg, setCurrentImg] = useState(0);

    const images = [
        { image: slide1, alt: "pizza" },
        { image: slide3, alt: "pizza" },
        { image: slide4, alt: "pizza" },
        { image: slide5, alt: "pizza" },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((preimg) =>
                preimg < images.length - 1 ? preimg + 1 : 0
            );
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex items-center'>
            <Image src={images[currentImg].image} alt={images[currentImg].alt} className='rounded' />
        </div>
    )
}

export default SlideShow;