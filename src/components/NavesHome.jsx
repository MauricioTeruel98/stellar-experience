import React from 'react'
import starship from '../assets/img/starship luna.jpg'

const NavesHome = () => {
    return (
        <div className='relative my-20 md:my-40'>
            <h2 className='text-6xl font-bold absolute -top-5 left-5 text-purple-600 opacity-20'>Naves que Utilizaremos</h2>
            <h2 className='text-3xl font-bold'>Naves que Utilizaremos</h2>

            <div className='grid md:grid-cols-2'>
                <figure className='rounded-xl m-10'>
                    <img src={starship} alt="" className='rounded-xl' />
                </figure>

                <div className='flex h-100 items-center'>
                    <div>
                        <h4 className='text-4xl'>StarShip</h4>
                        <p className='text-xl'>La nave espacial Starship de SpaceX y el cohete Super Heavy -denominados colectivamente Starship- representan un sistema de transporte totalmente reutilizable diseñado para llevar tripulación y carga a la órbita terrestre, la Luna, Marte y más allá. Starship será el vehículo de lanzamiento más potente del mundo jamás desarrollado, capaz de transportar hasta 150 toneladas métricas totalmente reutilizables y 250 toneladas métricas fungibles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavesHome