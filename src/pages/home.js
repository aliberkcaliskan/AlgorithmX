import React, { useState, useEffect } from 'react'
import Header from '../component/header'
import { Chart } from 'primereact/chart';
import Lottie from 'react-lottie-player'
import lottieJson from '../lottie/Sort.json'
export default function Home() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const data = {
            labels: [' ', ' ', ' ', ' ', ' ',],
            datasets: [
                {
                    label: '',
                    data: [20000, 40000, 45000, 60000, 70000],
                    fill: true,
                    borderColor: '#829FC1',
                    tension: 0.4,
                    backgroundColor: '#D5DFEA'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    return (<>
        <Header />
        <div className='px-44 pt-20 w-full h-full bg-gainsboro relative overflow-hidden'>
            <div className='flex justify-center pt-12 rounded-md cursor-pointer'>
                <img className='p-2 shadow-button bg-white-0' src='/assets/stars-icon.svg' alt='star-icon' />
            </div>
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
            <div className='mt-9 flex justify-center items-center flex-col rounded-t-4xl  pt-20 top-to-bottom-linear text-lightGray h-96 border-white-300 border border-b-0'>
                <h1 className="text-center text-7xl font-bold mb-5">Dashboard Screen </h1>
                <h1 className="text-center text-7xl font-bold ">will come here</h1>
            </div>
            <div className='flex justify-center items-center  pt-32 pb-12'>
                <h1 className="text-center text-4xl font-bold mb-5 text-grayx-100">What Algorithm X Offers? </h1>
            </div>
            <div className='flex justify-center items-center gap-8 h-100 relative pb-20 '>
                <div className='w-3/6 h-[18rem] lg:h-[20rem] xl:h-[30rem] bg-white-200 p-4 pr-0 rounded-md flex flex-col'>
                    <span className='text-grayx-300 text-sm font-semibold '>Monthly Income</span>
                    <div className='flex items-center  gap-1'>
                        <span className='font-semibold text-2xl  text-grayx-200'>$72,000</span>
                        <span className='font-semibold text-xs p-1 text-yellowx-200 bg-yellowx-100 rounded-full'>+20%</span>
                    </div>
                    <Chart height="100%" type="line" data={chartData} options={chartOptions} />
                    <div className='text-base text-grayx-400 p-5'>
                        Algorithm X empowers your business by crafting remarkable user journeys, elevating brand experiences, and promoting lasting customer relationships.
                    </div>
                </div>

                <div className='w-3/6 h-[18rem] lg:h-[20rem] xl:h-[30rem] bg-white-200 p-4 rounded-md flex flex-col'>
                    <Lottie
                        loop
                        play
                        animationData={lottieJson}
                    />
                    <div className='text-base text-grayx-400 p-5'>
                        Our profound products simplify, empower, and liberate marketers from data complexities, enabling them to understand, predict, and connect with their audience.      </div>
                </div>
            </div>
            <div className='flex justify-center item-center'>
                <div className='bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer'>Explore the 10 key points that Algorithm X offer -></div>
            </div>
            <div className='flex justify-center pt-12 pb-2 rounded-md cursor-pointer'>
                <img className='p-2 shadow-button bg-white-0' src='/assets/settings.svg' alt='star-icon' />
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mb-5 text-grayx-100">How Algorithm X Works?</h1>
                <p className='text-center  text-grayx-200 '>Algorithm X operates in two distinct phases: <br /> The first phase is executed just once, while the second phase runs continuously.</p>
            </div>
            <div className='flex flex-wrap'></div>
        </div>
    </>)


}   