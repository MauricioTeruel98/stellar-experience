import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/img/galaxy.jpg'
import check from '../assets/img/cheque.png'

const Paquetes = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-20 min-h-screen'>
            <Link to='/paquete/1'>
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paquete #1</h2>
                        <ul>
                            <li className='flex my-2'>
                                <img src={check} alt="" className='w-6 h-6 me-5' />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Paquetes