import React from 'react'

export default function Header() {
    return (
        <div className="bg-gainsboro w-full py-5 xl:px-40 lg:px-24 sm:px-12 shadow-3xl flex absolute">
            <div className=' xl:w-6/12 md:w-4/12 flex'>
                <img src="/assets/logo.svg" alt="logo" />
            </div>
            <div className=' xl:w-6/12 flex xl:gap-12  md:w-8/12   md:gap-10'>
                <div className='flex  flex-row gap-14 items-center h-full text-darkBlue-100 text-sm font-medium'>
                    <div className='flex gap-1 cursor-pointer'>Company <img src='/assets/arrow-down.svg' alt="arrow" /> </div>
                    <div className='flex gap-1 cursor-pointer'>Solutions <img src='/assets/arrow-down.svg' alt="arrow" /> </div>
                    <div className='flex gap-1 cursor-pointer'>Channels  <img src='/assets/arrow-down.svg' alt="arrow" /></div>
                    <div className='flex gap-1 cursor-pointer'>Products  <img src='/assets/arrow-down.svg' alt="arrow" /></div>
                </div>
                <div className='flex flex-row items-center h-full'>
                    <div className='bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer whitespace-nowrap'>CTA Button</div>
                </div>
            </div>
        </div>
    );
}