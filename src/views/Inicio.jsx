import React from 'react'
import QuienesSomos from '../components/QuienesSomos'
import BotonesHome from '../components/BotonesHome'
import NavesHome from '../components/NavesHome'
import CarouselHome from '../components/CarouselHome'

const Inicio = () => {

    return (
        <>
            <CarouselHome />
            <QuienesSomos />
            <BotonesHome />
            <NavesHome />
        </>
    )
}

export default Inicio