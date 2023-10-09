import React, { useEffect, useState } from 'react'
import image from '../assets/img/galaxy.jpg'
import starup from '../assets/img/startup2.png'
import { Link, useParams } from 'react-router-dom';
import { paquetesData } from '../data/paquetesData';
import Paquetes from './Paquetes';
import '../App.css'

const Paquete = () => {

    const [paquete, setPaquete] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const paqueteEncontrado = paquetesData.find(p => p.id === parseInt(id));
        setPaquete(paqueteEncontrado);
    }, [id]);

    return (
        <div className='relative'>
            <div className='my-20'>
                <div className='relative mb-10'>
                    <h2 className='text-6xl absolute -top-5 left-5 font-bold text-purple-600 opacity-20'>{paquete.titulo}</h2>
                    <h1 className='relative z-20 text-3xl font-bold'>{paquete.titulo}</h1>
                </div>

                <div className='my-10 bg-slate-500 text-gray-800 rounded-2xl p-10'>
                    <h2 className='text-3xl'>{paquete.info}</h2>
                </div>

                <div className="w-full">
                    {paquete.imagenes && paquete.imagenes.length > 0 && (
                        <img src={paquete.imagenes[0]} className="w-full img-pack rounded-xl object-contain" />
                    )}
                </div>

                <div className='my-20'>
                    <h2 className='text-2xl'>What does this package include?</h2>
                    <div className="join join-vertical w-full my-5">
                        {
                            paquete.items?.map(item => (
                                <div className="collapse join-item border border-white">
                                    <div className="collapse-title text-xl font-medium">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full">
                    {paquete.imagenes && paquete.imagenes.length > 0 && (
                        <img src={paquete.imagenes[1]} className="w-full img-pack rounded-xl object-contain" />
                    )}
                </div>

                <div className='my-20 bg-slate-500 text-gray-800 rounded-2xl p-10'>
                    <h2 className='text-3xl'>{paquete.infoDetallada}</h2>
                </div>

                <div className='my-20'>
                    <h2 className='text-2xl'>Requirements</h2>
                    <div className="join join-vertical w-full my-5">
                        {
                            paquete.requisitos?.map(item => (
                                <div className="collapse join-item border border-white">
                                    <div className="collapse-title text-xl font-medium">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {
                    paquete.itinerario?.length > 0 ? (
                        <div className='my-20'>
                            <h2 className='text-2xl'>Itinerary</h2>
                            <div className="collapse bg-secondary text-gray-900 w-full my-5">
                                {
                                    paquete.itinerario?.map((item, index) => (
                                        <div className="border-bottom">
                                            <div className="collapse-title text-xl font-medium">
                                                Day {index + 1} - {item}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }

                <div className="w-full">
                    {paquete.imagenes && paquete.imagenes.length > 0 && (
                        <img src={paquete.imagenes[2]} className="w-full img-pack rounded-xl object-contain" />
                    )}
                </div>

                <div>
                    <h2 className='text-5xl font-bold'>Explore the other packages</h2>
                    <Paquetes />
                </div>
            </div>

            <div className='fixed bottom-5 left-5 z-50'>
                <Link to={'/paquetes'} className="btn btn-neutral btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </Link>
            </div>

            <div className='fixed bottom-5 right-5 z-50'>
                <Link to='/contratar' className="btn btn-secondary">
                    <img src={starup} alt="" className='absolute -top-5 -left-5 w-12 h-12' />
                    <p className='text-xl md:text-4xl'>CONTRACT</p>
                </Link>
            </div>
        </div>
    )
}

export default Paquete