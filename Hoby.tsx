import React from 'react'

const Hoby = () => {
    return (
        <>
            <div className='h-auto sm:h-[100vh] flex flex-col items-center justify-center
       relative text-center w-full pt-40 pb-44 lg:mt-0 lg:mb-0 p-4 overflow-hidden text-zinc-50 drop-shadow-lg shadow-xl bg-gradient-to-tr from-gray-950 via-blue-600 to-gray-950
      '>
                <div>
                    <div className='space-y-4 font-sans '>
                        <h1 className='text-3xl md:text-7xl lg:text-8xl font-bold'>HELLO I AM  <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> SURYA !!</span></h1>
                        <p className='text-md md:text-2xl lg:text-3xl'>Nice To Meet You | I am a <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>Frontend Developer</span> and also a <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>UI Designer</span>.</p>
                    </div>
                    <div className='space-x-5'>
                        <button  className= ' bg-white file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 px-4 py-2 rounded-md mt-4 hover:bg-black transition-all duration-300 ease-in-out text-black hover:text-white'>Download CV</button>

                        <button className='bg-white px-4 py-2 rounded-md mt-4 hover:bg-transparent border border-black transition-all duration-300 ease-in-out text-black hover:text-white'>Know More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hoby