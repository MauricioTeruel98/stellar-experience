import React from 'react'
import logo from '../assets/img/stellar_white.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-gray-400 bg-opacity-50 rounded-lg">
            <div className="flex-1">
                <Link className="" to='/'>
                    <img src={logo} alt="" className='h-10'/>
                </Link>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar