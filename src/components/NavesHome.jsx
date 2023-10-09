import React from 'react'
import starship from '../assets/img/starship luna.jpg'

const NavesHome = () => {
    return (
        <div className='relative my-20 md:my-40'>
            <h2 className='hidden lg:block text-6xl font-bold absolute -top-5 left-5 text-purple-600 opacity-20'>Ships we will use</h2>
            <h2 className='text-3xl font-bold'>Ships we will use</h2>

            <div className='grid md:grid-cols-2'>
                <figure className='rounded-xl m-10'>
                    <img src={starship} alt="" className='rounded-xl' />
                </figure>

                <div className='flex h-100 items-center'>
                    <div>
                        <h4 className='text-4xl'>StarShip®</h4>
                        <p className='text-xl'>The SpaceX® Starship® spacecraft and Super Heavy rocket - collectively referred to as Starship® - represent a fully reusable transportation system designed to carry crew and cargo to Earth orbit, the Moon, Mars and beyond, and we use the Starship® to make the trips.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavesHome