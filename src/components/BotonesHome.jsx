import React from 'react'
import image from '../assets/img/galaxy.jpg'
import paquete from '../assets/img/_953f2450-f53c-49f8-8209-b5cb1c396a58.jfif'
import info from '../assets/img/_fbf7a623-e76b-43d7-9933-b8060e87fa77.jfif'
import { Link } from 'react-router-dom'

const BotonesHome = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Link to="/paquetes">
                    <div className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img className='max-h-96 w-full object-cover' src={info} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title md:text-6xl">Paquetes</h2>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/mas-info">
                    <div className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={paquete} alt="Shoes" className='max-h-96 w-full object-cover' /></figure>
                        <div className="card-body">
                            <h2 className="card-title md:text-6xl">Más Info</h2>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BotonesHome