import React from 'react'
import logoNasa from '../assets/img/logo_nasa_white.png'
import logoSpaceApps from '../assets/img/SpaceAppsLogo_Default_2ColorWhi.width-440.jpegquality-60.png'
import logoSpacex from '../assets/img/stellar_white.png'

const Sponsors = () => {
    return (
        <>
            <div className='grid md:grid-cols-3 gap-20 mb-20 md:mb-40'>
                <div className='flex justify-center'>
                    <img src={logoNasa} alt="" className='w-52 object-contain' />
                </div>
                <div className='flex justify-center'>
                    <img src={logoSpaceApps} alt="" className='w-52 object-contain' />
                </div>
                <div className='flex justify-center'>
                    <img src={logoSpacex} alt="" className='w-52 object-contain' />
                </div>
            </div>
        </>
    )
}

export default Sponsors