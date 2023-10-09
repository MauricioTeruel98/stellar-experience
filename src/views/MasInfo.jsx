import React from 'react'
import img1 from '../assets/img/All Decks of SpaceX 100-passenger Starship interior concept by Joseph Lantz.png'
import img2 from '../assets/img/navecomparacion .jpg'
import flecha from '../assets/img/punta-de-flecha (1).png'
import { Link } from 'react-router-dom'

const MasInfo = () => {
    return (
        <div className='my-20'>
            <div className='relative'>
                <h2 className='hidden md:block text-6xl absolute -top-5 left-5 font-bold text-purple-600 opacity-20'>Information</h2>
                <h1 className='relative z-20 text-3xl font-bold'>Information</h1>
            </div>

            <div className='my-10'>
                <h2 className='text-3xl font-bold'>Ship</h2>
                <p className='text-lg'>The ship you will be traveling in is the Starship®, designed to carry all the necessary equipment for your 14-day journey. With a cargo capacity of up to 150 tons and space to accommodate up to 100 people, this ship is fully equipped to carry out all the planned activities on the itinerary. Among its facilities, you will find a lush botanical garden, a modern gym, comfortable cabins for rest, and an impressive dome that provides a panoramic view of outer space. This dome is also used to provide real-time information through augmented reality, providing interesting data about the Moon, such as its mass, gravity, and landing sites, among others.
                </p>
                <p className='text-lg mt-5'>
                    In this ship, you will experience a unique and extraordinary experience, feeling like a real astronaut as you participate in all the scheduled activities for the journey.</p>
                <div className='md:flex gap-10 my-10'>
                    <div className='md:w-[30%]'>
                        <img src={img1} alt="" className='w-full rounded-xl' />
                        <p>*Concept of the interior of the ship, by Joseph Lantz</p>
                    </div>
                    <div className='md:w-[70%]'>
                        <img src={img2} alt="" className='w-full rounded-xl' />
                        <p>Dome concept</p>
                    </div>
                </div>
            </div>

            <div className='my-10'>
                <h2 className='text-3xl font-bold'>Requirements</h2>

                <p className='text-xl'>To be able to undertake these trips, it is necessary to pass certain medical exams to ensure that you have an excellent experience. In case you do not pass the medical exams, we can offer you the <span className='font-bold text-purple-600'><Link to="/paquete/1">"Suborbital Travel powered by Augmented Reality"</Link></span> plan.</p>

                <ul className=''>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Cardiovascular evaluation: Tests to assess heart health, such as electrocardiograms (ECG) and echocardiograms, would be conducted to ensure that the cardiovascular system is in good condition and can withstand the demands of microgravity.
                    </li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Respiratory evaluation: Pulmonary function tests would be performed to verify lung capacity and respiratory function, as oxygenation is essential in space.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Immune system evaluation: Blood tests would be conducted to assess the status of the immune system and ensure that the individual has adequate immunity against diseases.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Mental health evaluation: A psychological assessment would be conducted to determine emotional stability and the ability to cope with stress and isolation in space.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Kidney and liver function evaluation: Blood tests would be conducted to assess the function of the kidneys and liver, as these organs are essential for processing toxins and waste in the body.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Ophthalmological examinations: Ophthalmological examinations would be conducted to detect potential eye problems related to intracranial pressure and the effects of microgravity.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Dental evaluation: Oral health would be checked to prevent dental problems during space flight.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />
                        Physical fitness assessment: The individual would undergo physical fitness tests to ensure they have the necessary strength and endurance for activities in space.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />Allergies and chronic diseases evaluation: Allergies and any chronic diseases would be reviewed, and measures would be taken to manage them properly during space flight.</li>
                    <li className='text-lg my-3 flex'><img src={flecha} className='w-10 h-10' alt="" />In addition to these medical exams, the individual must meet certain fitness criteria, such as not having serious medical conditions, being within a specific age range, and having good mental health.</li>
                </ul>
            </div>
        </div>
    )
}

export default MasInfo
