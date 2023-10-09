
import React, { useState, useEffect } from 'react';
import logo from '../assets/img/Logo_stellar-removebg-preview (1).png';
import logo1 from '../assets/img/_304ecd4b-f6ba-41cf-81e4-8e39f4aad49e (1).jfif';
import logo2 from '../assets/img/_953f2450-f53c-49f8-8209-b5cb1c396a58.jfif';
import logo3 from '../assets/img/_fbf7a623-e76b-43d7-9933-b8060e87fa77.jfif';
import '../App.css'

const images = [logo1, logo2, logo3];

export default function CarouselHome() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true); // Activa la transición
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setIsTransitioning(false); // Desactiva la transición después de un tiempo
            }, 1000); // Tiempo de transición (ajusta según tus necesidades)
        }, 3000); // Cambiar cada 3 segundos (ajusta esto según tus necesidades)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rounded-xl relative">
            <div className='hidden lg:block overlay-carousel absolute top-0 left-0 w-full h-full rounded-t-xl rounded-b-xl'></div>
            <div className='hidden lg:block absolute right-0 h-full'>
                <img src={logo} alt="" className='h-full'/>
            </div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt=""
                    className={`w-full ${currentImage === index ? 'visible' : 'hidden'} h-[600px] object-cover mt-10 rounded-xl`}
                    style={{
                        opacity: currentImage === index || isTransitioning ? 1 : 0, // Cambiar la opacidad cuando es visible o está en transición
                        transition: 'opacity 1s', // Establecer la duración de la transición
                    }}
                />
            ))}
        </div>
    );
}

