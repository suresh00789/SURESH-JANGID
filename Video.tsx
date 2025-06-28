import React from 'react';

const VideoPlayer = () => {
    return (

        <>
        <div className='text-center text-5xl font-semibold my-6 font-serif text-animated text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-violet-600 to-black '>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-violet-600 to-black'>Watch this Videos Here !!</h1>
        </div>
            <div className='w-full h-auto  sm:h-[100vh] bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-white font-bold py-1 px-3 rounded-md shadow-xl mb-5 mt-5 flex justify-center items-center md:text-2xl lg:text-3xl xl:text-4xl ' >
                <div className='relative  w-full h-auto sm:h-[70vh] overflow-hidden  flex justify-center items-center'>
                    <iframe
                        width="700"
                        height="500"
                        src="https://www.youtube.com/embed/M5QY2_8704o"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </>

    );
}

export default VideoPlayer;
