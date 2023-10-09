import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <div className=''>
                <div className='m-5'>
                    <Navbar />

                    <div className='container mx-auto'>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout