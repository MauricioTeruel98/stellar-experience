import React from 'react'
import image from '../assets/img/galaxy.jpg'
import { Link } from 'react-router-dom'

const BotonesHome = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Link to="/paquetes">
                    <div className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/mas-info">
                    <div className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
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