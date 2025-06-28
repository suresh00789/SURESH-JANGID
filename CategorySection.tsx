"use client";

import React from 'react';

const CategorySection = () => {
    return (
        <>
            <div className='flex justify-center text-2xl text-center align-middle w-full bg-white items-center font-semibold font-light font-mono h-[10vh] text-gray-950 rounded-xl shadow-lg  hover:bg-gradient-to-tr from-red-600 via-gray-800 to-indigo-300'>
                <h1>Category Section</h1>
            </div>
            <div className='h-auto flex justify-center text-2xl text-center align-middle w-full items-center'>
                <div className='w-full  h-auto flex justify-center align-middle items-center' id='category-section'>
                    <div className='px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10' id='category-section'>

                        <div className='bg-white hover:bg-gradient-to-tr from-red-600 via-gray-800 to-indigo-300 bg-gradient-to-r from-gray-950 via-blue-600 to-gray-950 p-10 hover:scale-110  h-74 w-75 drop-shadow-lgtransition duration-300 ease-in-out border-black shadow-2xl text-gray-950 hover:border-blue-500 hover:shadow-blue-500 border-b-2 border-l-2 border-r-2 border-solid border-2 rounded-md flex justify-center align-middle items-center'>
                            <p className='text-xl text-center font-light font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur adipisicing elit. Quisquam consectetur adipisicing elit. Quisquam voluptatum!</p>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-tr from-red-600 via-gray-800 to-indigo-300 bg-gradient-to-r from-gray-950 via-blue-600 to-gray-950 p-10 hover:scale-110  h-74 w-75 drop-shadow-lgtransition duration-300 ease-in-out border-black shadow-2xl text-gray-950 hover:border-blue-500 hover:shadow-blue-500 border-b-2 border-l-2 border-r-2 border-solid border-2 rounded-md flex justify-center align-middle items-center'>
                            <p className='text-xl text-center font-light font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur adipisicing elit. Quisquam consectetur adipisicing elit. Quisquam voluptatum!</p>
                        </div>
                        <div className='bg-white hover:bg-gradient-to-tr from-red-600 via-gray-800 to-indigo-300 bg-gradient-to-r from-gray-950 via-blue-600 to-gray-950 p-10 hover:scale-110  h-74 w-75 drop-shadow-lgtransition duration-300 ease-in-out border-black shadow-2xl text-gray-950 hover:border-blue-500 hover:shadow-blue-500 border-b-2 border-l-2 border-r-2 border-solid border-2 rounded-md flex justify-center align-middle items-center'>
                            <p className='text-xl text-center font-light font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur adipisicing elit. Quisquam consectetur adipisicing elit. Quisquam voluptatum!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategorySection;
