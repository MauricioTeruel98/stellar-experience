import React from 'react'
import image from '../assets/img/galaxy.jpg'
import starup from '../assets/img/startup2.png'

const Paquete = () => {
    return (
        <div className='relative'>
            <div className='my-20'>
                <div className='relative mb-10'>
                    <h2 className='text-6xl absolute -top-5 left-5 font-bold text-purple-600 opacity-20'>Paquete #1</h2>
                    <h1 className='text-3xl font-bold'>Paquete #1</h1>
                </div>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className='my-20'>
                    <h2 className='text-2xl'>Que incluye este paquete?</h2>
                    <div className="join join-vertical w-full my-5">
                        <div className="collapse collapse-arrow join-item border border-white">
                            
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-white">
                            
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-white">
                            
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-5 right-5'>
                <button className="btn btn-primary">
                    <img src={starup} alt="" className='absolute -top-5 -left-5 w-12 h-12'/>
                    <p className='text-xl md:text-4xl'>CONTRATAR</p>
                </button>
            </div>
        </div>
    )
}

export default Paquete