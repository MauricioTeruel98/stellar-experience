import React from 'react'
import QuienesSomos from '../components/QuienesSomos'
import BotonesHome from '../components/BotonesHome'
import NavesHome from '../components/NavesHome'
import CarouselHome from '../components/CarouselHome'
import Sponsors from '../components/Sponsors'

const Inicio = () => {

    return (
        <>
            <CarouselHome />
            <QuienesSomos />
            <BotonesHome />
            <NavesHome />
            <Sponsors />
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
            </div>
        </>
    )
}

export default Inicio