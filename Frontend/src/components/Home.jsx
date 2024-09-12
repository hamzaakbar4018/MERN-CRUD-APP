import React from 'react';
import Bar from './Bar';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100'>
            <h1 className='font-bold font-mono tracking-widest from-stone-950 text-6xl mb-4 text-center'>CRUD</h1>
            <div className='w-full max-w-4xl'>
                <Bar />
            </div>
            <p className='mt-5 font-bold font-mono'>Create,Read,Update,Delete</p>
        </div>
    );
}

export default Home;
