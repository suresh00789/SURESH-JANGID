import React from 'react'


const Users = () => {
    return (
        <>
            <div className='container mx-auto p-4 bg min-h-screen '>
                <h1 className='text-4xl font-serif font-bold text-center mt-8 mb-6 text-white' >Users in last 5 years</h1>
                <p className='text-center font-serif font-bold text-xl text-white'>Our users are growing exponentially.</p>

                <div className='flex justify-center text-center items-center gap-x-4 gap-y-4 flex-wrap'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem ducimus reprehenderit fuga totam laborum nam sed voluptates autem! Consequatur.</p>
                </div>
                <div className='flex justify-between items-center gap-x-4 gap-y-4 flex-wrap'>
                    <div className='card w-87 pl-20 mr-20 ml-20 mt-4 mb-4 my-4 h-[50vh] bg-gray-900 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out'>
                        <h2 className=' text-2xl pr-17 font-serif font-bold text-center mt-8 mb-6 text-white' >trry to add some content here.</h2>
                        <p className='text-center font-serif font-bold text-xl flex justify-center items-center pr-22 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem ducimus reprehenderit fuga.</p>
                    </div>
                    <div className='card w-87 pl-20 mr-20 ml-20 mt-4 mb-4 my-4 h-[50vh] bg-gray-900 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out'>
                        <h2 className=' text-2xl pr-17 font-serif font-bold text-center mt-8 mb-6 text-white' >trry to add some content here.</h2>
                        <p className='text-center font-serif font-bold text-xl flex justify-center items-center pr-22 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem ducimus reprehenderit fuga.</p>
                    </div>
                    <div className='card w-87 pl-20 mr-20 ml-20 mt-4 mb-4 my-4 h-[50vh] bg-gray-900 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out'>
                        <h2 className=' text-2xl pr-17 font-serif font-bold text-center mt-8 mb-6 text-white' >trry to add some content here.</h2>
                        <p className='text-center font-serif font-bold text-xl flex justify-center items-center pr-22 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem ducimus reprehenderit fuga.</p>
                    </div>
                    <div className='card w-87 pl-20 mr-20 ml-20 mt-4 mb-4 my-4 h-[50vh] bg-gray-900 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out'>
                        <h2 className=' text-2xl pr-17 font-serif font-bold text-center mt-8 mb-6 text-white' >trry to add some content here.</h2>
                        <p className='text-center font-serif font-bold text-xl flex justify-center items-center pr-22 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem ducimus reprehenderit fuga.</p>
                    </div>

                </div>
            </div>
            <div className=' pt-8 mb-8 flex justify-center items-center gap-x-4 gap-y-4 flex-wrap pb-14'>
                <button className="bg-blue-500 flex justify-center items-center text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Larne More</button>

            </div>

        </>
    )
}

export default Users