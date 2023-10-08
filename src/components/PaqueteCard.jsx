import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/img/galaxy.jpg'
import check from '../assets/img/cheque.png'

const PaqueteCard = ({paquete}) => {
    return (
        <>
            <Link to={`/paquete/${paquete.id}`}>
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{paquete.titulo}</h2>
                        <ul>
                            {
                                paquete.items.map(item => (
                                    <li className='flex my-2'>
                                        <img src={check} alt="" className='w-6 h-6 me-5' />
                                        <p>{item}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PaqueteCard