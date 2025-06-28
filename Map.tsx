"use client"
import { useState } from 'react'
import React from 'react'


const Map = () => {
    const [hide, setHide] = useState(false)
    return (
        <>
            <div className='h-auto sm:h-[100vh] flex flex-col items-center justify-center
       relative text-center w-full pt-20 sm:pt-40 pb-20 sm:pb-44 lg:mt-0 lg:mb-0 p-4 overflow-hidden'>
                <div className='flex flex-col lg:flex-row justify-between w-full h-auto bg-slate-400 mt-10 mb-10 rounded-md'>

                    <div className='w-full lg:w-1/2 flex flex-col gap-y-4 pt-10 pb-10 lg:p-10 pl-5 sm:pl-20'>
                        <h1 className='text-xl text-black font-bold'>Location</h1>
                        <div className='space-y-3'>
                            <h2 className='text-lg text-gray-900'>I AM ALWAYS CONNECTED WITH YOU!!</h2>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with the latest offers,<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with the latest offers, promotions, and exclusive deals.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with the latest offers,<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe.<br /></p>
                            <p className='text-sm text-gray-900'>Subscribe to our newsletter and stay up-to-date with.<br /></p>
                        </div>
                        <br />
                        <div>
                            <button className='bg-blue-500  h-10 hover:bg-blue-700 text-white pr-2 font-bold py-2 px-4 rounded'>Get Direction</button>
                        </div>
                    </div>


                    <div className={`w-full lg:w-1/2 ${hide ? 'hidden' : ''}flex justify-center items-center h-[calc(100vh-10rem)] lg:pl-10 lg:pr-20 pl-2  pr-2`} onClick={() => setHide(!hide)} id={`}${hide ? 'block' : 'hidden'} id='map'`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12911.936709258227!2d71.75674937166876!3d24.75125678513602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3944a529255da00f%3A0x72fe9e11f8aefe2e!2sSanchore%2C%20Rajasthan%20343041!5e0!3m2!1sen!2sin!4v1751026954693!5m2!1sen!2sin" className="w-full lg:w-[600px] h-[300px] lg:h-[450px]" style={{ border: "0", borderRadius: "1rem" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map
