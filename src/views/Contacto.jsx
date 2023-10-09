import React from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {

    return (
        <>
            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="text-center">
                        <h2 className='text-4xl font-bold'>CONTRACT</h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="alert alert-info mt-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>We currently have no trips available, leave us your message and we will contact you as soon as they are available.</span>
                </div>
            </div>

            <div className='flex justify-center items-center w-full'>
                <div className="card lg:w-1/2 glassie shadow-xl mt-20">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <form className='contact-form w-44 sm:w-full mx-auto'>
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="form-control w-full md:w-1/2 my-0 sm:my-2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                        className="input input-primary input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control w-full md:w-1/2 my-0 sm:my-2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-primary input-bordered w-full"
                                        id='phone'
                                        name='phone'
                                        pattern="[/^\d{10}$/]"
                                        title='Telefono no valido'
                                    />
                                </div>
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <input
                                    type="email"

                                    name="email"
                                    id="email"
                                    title="email no valido"
                                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                                    className="input input-primary input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    name="coments"
                                    id="coments"

                                    cols="30"
                                    rows="5"
                                    className="textarea textarea-primary textarea-bordered h-24"
                                    required
                                />
                            </div>
                            <a
                                className="btn btn-secondary rounded-full"
                            >Send Message</a>
                        </form>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-5 left-5 z-50'>
                <Link to={'/paquetes'} className="btn btn-neutral btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default Contacto