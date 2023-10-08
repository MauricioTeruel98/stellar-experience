import React from 'react'

const NavesHome = () => {
    return (
        <div className='relative my-20'>
            <h2 className='text-6xl font-bold absolute -top-5 left-5 text-purple-600 opacity-20'>Naves que Utilizaremos</h2>
            <h2 className='text-3xl font-bold'>Naves que Utilizaremos</h2>

            <div className='grid md:grid-cols-2'>
                <figure>
                    <img src="" alt="" />
                </figure>

                <div>
                    <h4 className='text-4xl'>StarShip</h4>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus ipsam nam minima voluptate qui cumque eius enim adipisci explicabo?</p>
                </div>
            </div>
        </div>
    )
}

export default NavesHome