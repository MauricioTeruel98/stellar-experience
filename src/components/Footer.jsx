import React from 'react'
import logo from '../assets/img/stellar_white.png'

const Footer = () => {
    return (
        <>
            <footer className="footer p-4 px-10 text-neutral-content">
                <div className="items-center md:flex justify-between w-full">
                    <div className='mb-10'>
                        <img src={logo} alt="" className='h-14 object-contain' />
                    </div>
                    <div>
                        <p>Copyright © 2023 - All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer