import React from 'react'
import Header from '../component/header'
export default function Home() {


    return (<>
        <Header />
        <div className='px-40 pt-20 w-full h-full bg-gainsboro'>
            <div className='flex justify-center pt-12 rounded-md cursor-pointer'><img className='p-2 shadow-button bg-white-0' src='/assets/stars-icon.svg' alt='star-icon' /></div>
            <div className='flex justify-center  items-center pt-8 flex-col'>
                <h1 className='lg:text-7xl lg:text-center  text-5xl font-bold'>Unlock the Marketing Code</h1>
                <h1 className='lg:text-7xl text-5xl font-bold pt-2 pb-4  home-page-linear'>With Algorithm X</h1>
                <p className='text-xl font-normal pt-1 text-grayx-0'>Growth & Personalization Made Simple, Really Simple!</p>
            </div>
            <div className='flex flex-row items-center justify-center pt-8'>
                <div className='w-3/6  flex flex-row items-center justify-center gap-10'>
                    <div className='bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer'>CTA Button</div>
                    <div className='cursor-pointer text-grayx-200 font-semibold'> Secondary ➞</div>
                </div>
            </div>
        </div>
    </>)


}   