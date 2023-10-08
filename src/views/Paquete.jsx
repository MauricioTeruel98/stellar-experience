import React, { useEffect, useState } from 'react'
import image from '../assets/img/galaxy.jpg'
import starup from '../assets/img/startup2.png'
import { Link, useParams } from 'react-router-dom';
import { paquetesData } from '../data/paquetesData';
import Paquetes from './Paquetes';

const Paquete = () => {

    const [paquete, setPaquete] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const paqueteEncontrado = paquetesData.find(p => p.id === parseInt(id));
        setPaquete(paqueteEncontrado);
    }, [id]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % paquete.imagenes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + paquete.imagenes.length) % paquete.imagenes.length);
    };

    return (
        <div className='relative'>
            <div className='my-20'>
                <div className='relative mb-10'>
                    <h2 className='text-6xl absolute -top-5 left-5 font-bold text-purple-600 opacity-20'>{paquete.titulo}</h2>
                    <h1 className='text-3xl font-bold'>{paquete.titulo}</h1>
                </div>

                <div className='my-10 bg-slate-500 rounded-2xl p-10'>
                    <h2 className='text-3xl'>{paquete.info}</h2>
                </div>

                <div className="carousel w-full">
                    {paquete.imagenes?.map((image, index) => (
                        <div
                            key={index}
                            id={`slide${index + 1}`}
                            className={`carousel-item relative w-full ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                        >
                            <img src={image} className="w-full rounded-xl h-[600px] object-cover" alt={`Slide ${index + 1}`} />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#!" className="btn btn-circle" onClick={prevSlide}>
                                    ❮
                                </a>
                                <a href="#!" className="btn btn-circle" onClick={nextSlide}>
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='my-20'>
                    <h2 className='text-2xl'>Que incluye este paquete?</h2>
                    <div className="join join-vertical w-full my-5">
                        {
                            paquete.items?.map(item => (
                                <div className="collapse collapse-arrow join-item border border-white">
                                    <div className="collapse-title text-xl font-medium">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='my-20 bg-slate-500 rounded-2xl p-10'>
                    <h2 className='text-3xl'>{paquete.infoDetallada}</h2>
                </div>

                <div className='my-20'>
                    <h2 className='text-2xl'>Requisitos</h2>
                    <div className="join join-vertical w-full my-5">
                        {
                            paquete.requisitos?.map(item => (
                                <div className="collapse collapse-arrow join-item border border-white">
                                    <div className="collapse-title text-xl font-medium">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h2 className='text-5xl font-bold'>Explorá los otros paquetes</h2>
                    <Paquetes />
                </div>
            </div>

            <div className='fixed bottom-5 left-5'>
                <Link to={'/paquetes'} className="btn btn-neutral btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </Link>
            </div>

            <div className='fixed bottom-5 right-5'>
                <button className="btn btn-secondary">
                    <img src={starup} alt="" className='absolute -top-5 -left-5 w-12 h-12' />
                    <p className='text-xl md:text-4xl'>CONTRATAR</p>
                </button>
            </div>
        </div>
    )
}

export default Paquete