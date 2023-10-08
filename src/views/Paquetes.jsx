import React from 'react'
import {paquetesData} from '../data/paquetesData'
import PaqueteCard from '../components/PaqueteCard'

const Paquetes = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-20 min-h-screen'>
            {
                paquetesData.map(paquete => (
                    <PaqueteCard paquete={paquete} key={paquete.id} />
                ))
            }
        </div>
    )
}

export default Paquetes