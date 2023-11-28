import React, {useState, useEffect} from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import {Chart} from "primereact/chart";
import Lottie from "react-lottie-player";
import lottieJson from "../lottie/Sort.json";
import lottieJson2 from "../lottie/Integration.json";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";

export default function Home() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const data = {
      labels: [" ", " ", " ", " ", " "],
      datasets: [
        {
          label: "",
          data: [20000, 40000, 45000, 60000, 70000],
          fill: true,
          borderColor: "#829FC1",
          tension: 0.4,
          backgroundColor: "#D5DFEA",
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <div className="bg-gainsboro">
      <Header />
      <div className="px-44 pt-20 pb-20 w-full h-full bg-gainsboro relative overflow-scroll">
        <div className="flex justify-center pt-12 rounded-md cursor-pointer">
          <img
            className="p-2 shadow-button bg-white-0"
            src="/assets/stars-icon.svg"
            alt="star-icon"
          />
        </div>

        <div className="flex justify-center  items-center pt-8 flex-col">
          <h1 className="lg:text-7xl lg:text-center  text-5xl font-bold">
            Unlock the Marketing Code
          </h1>
          <h1 className="lg:text-7xl text-5xl font-bold pt-2 pb-4  home-page-linear">
            With Algorithm X
          </h1>
          <p className="text-xl font-normal pt-1 text-grayx-0">
            Growth & Personalization Made Simple, Really Simple!
          </p>
        </div>

        <div className="flex flex-row items-center justify-center pt-8">
          <div className="w-3/6  flex flex-row items-center justify-center gap-10">
            <div className="bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
              CTA Button
            </div>
            <div className="cursor-pointer text-grayx-200 font-semibold">
              Secondary ➞
            </div>
          </div>
        </div>

        <div className="mt-9 flex justify-center items-center flex-col rounded-t-4xl  pt-20 top-to-bottom-linear text-lightGray h-96 border-white-300 border border-b-0">
          <h1 className="text-center text-7xl font-bold mb-5">
            Dashboard Screen{" "}
          </h1>
          <h1 className="text-center text-7xl font-bold ">will come here</h1>
        </div>

        <div className="flex justify-center items-center  pt-32 pb-12">
          <h1 className="text-center text-4xl font-bold mb-5 text-grayx-100">
            What Algorithm X Offers?{" "}
          </h1>
        </div>

        <div className="flex justify-center items-center gap-8 h-100 relative pb-20 ">
          <div className="w-3/6 h-[18rem] lg:h-[20rem] xl:h-[30rem] bg-white-200 p-4 pr-0 rounded-md flex flex-col">
            <span className="text-grayx-300 text-sm font-semibold ">
              Monthly Income
            </span>
            <div className="flex items-center  gap-1">
              <span className="font-semibold text-2xl  text-grayx-200">
                $72,000
              </span>
              <span className="font-semibold text-xs p-1 text-yellowx-200 bg-yellowx-100 rounded-full">
                +20%
              </span>
            </div>
            <Chart
              height="100%"
              type="line"
              data={chartData}
              options={chartOptions}
            />
            <div className="text-base text-grayx-400 p-5">
              Algorithm X empowers your business by crafting remarkable user
              journeys, elevating brand experiences, and promoting lasting
              customer relationships.
            </div>
          </div>

          <div className="w-3/6 h-[18rem] lg:h-[20rem] xl:h-[30rem] bg-white-200 p-4 rounded-md flex flex-col">
            <Lottie loop play animationData={lottieJson} />
            <div className="text-base text-grayx-400 p-5">
              Our profound products simplify, empower, and liberate marketers
              from data complexities, enabling them to understand, predict, and
              connect with their audience.{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-center item-center">
          <div className="bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
            Explore the 10 key points that Algorithm X offer ->
          </div>
        </div>
        <div className="flex justify-center pt-12 pb-2 rounded-md cursor-pointer">
          <img
            className="p-2 shadow-button bg-white-0"
            src="/assets/settings.svg"
            alt="star-icon"
          />
        </div>

        <div>
          <h1 className="text-center text-4xl font-bold mb-5 text-grayx-100">
            How Algorithm X Works?
          </h1>
          <p className="text-center  text-grayx-200 ">
            Algorithm X operates in two distinct phases: <br /> The first phase
            is executed just once, while the second phase runs continuously.
          </p>
        </div>
        <div className="flex w-full pt-12 h-full">
          <div className="bg-white-200 rounded-md p-5 w-2/6 ">
            <Lottie loop play animationData={lottieJson2} />
            <div className=" ">
              <h6 className="text-xl font-semibold mt-5"> Integration</h6>
              <span className="text-sm text-darkBlue-200 font-semibold mt-5 block">
                Learn More ➔
              </span>
            </div>
          </div>
          <div className="bg-white-200 rounded-md p-5 w-2/6 mx-8">
            <Lottie loop play animationData={lottieJson2} />
            <div>
              <h6 className="text-xl font-semibold mt-5"> Integration</h6>
              <span className="text-sm text-darkBlue-200 font-semibold mt-5 block">
                Learn More ➔
              </span>
            </div>
          </div>
          <div className="bg-white-200 rounded-md p-5 w-2/6 ">
            <Lottie loop play animationData={lottieJson2} />
            <div>
              <h6 className="text-xl font-semibold mt-5"> Integration</h6>
              <span className="text-sm text-darkBlue-200 font-semibold mt-5 block">
                Learn More ➔
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full  h-full flex">
          <div className="bg-white-200 rounded-md p-5 w-[66.15%] justify-around ">
            <Lottie
              loop
              play
              animationData={lottieJson2}
              className="h-[22rem]"
            />
            <div>
              <h6 className="text-xl font-semibold mt-5"> Integration</h6>
              <span className="text-sm text-darkBlue-200 font-semibold mt-5 block">
                Learn More ➔
              </span>
            </div>
          </div>
          <div className="w-[2.3rem]"></div>
          <div className="bg-white-200 rounded-md p-5  w-[32%]">
            <Lottie
              loop
              play
              animationData={lottieJson2}
              className="h-[22rem]"
            />
            <div>
              <h6 className="text-xl font-semibold mt-5"> Integration</h6>
              <span className="text-sm text-darkBlue-200 font-semibold mt-5 block">
                Learn More ➔
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center item-center pt-20">
          <div className="bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
            Get in-dept details ->
          </div>
        </div>
      </div>

      <div className="w-screen bg-white-0 justify-center flex items-center py-12">
        <div className="flex justify-center items-center pt-12 rounded-md cursor-pointer flex-col">
          <img
            className=" my-3 p-2 w-9 shadow-button bg-white-0"
            src="/assets/stars-icon.svg"
            alt="star-icon"
          />
          <h6 className="font-bold text-[40px]"> About Algorithm X</h6>
          <p className="text-center w-3/6 pt-4 text-grayx-200 font-normal">
            Algorithm X is a company on a mission of solving the data
            complexities that all businesses face with the aim of simplifying
            the landscape of marketing, we are an experienced team with a very
            ambitious idea and a deep understanding of the challenges that
            marketers are facing nowadays, our team has harnessed the power of
            cutting-edge technology to simplify the complex and empower brands
            to forge profound connections with their customers.
          </p>
          <div className="mt-[60px] bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
            Get in-dept details ->
          </div>
        </div>
      </div>
      <div className="px-44 pb-20  pt-20 w-full h-full bg-gainsboro relative flex gap-8">
        <div className="w-3/6">
          <img className="w-full" src="/assets/home/card.svg" alt="star-icon" />
        </div>
        <div className="w-3/6 flex justify-center flex-col">
          <img
            className="p-2 shadow-button w-9 bg-white-0"
            src="/assets/stars-icon.svg"
            alt="star-icon"
          />
          <h6 className="text-[40px]  mt-4 font-bold"> Our Mission</h6>
          <p className=" mt-4  text-grayx-200">
            At Algorithm X, our mission is to simplify and empower marketers in
            the ever-evolving world of big data. We provide state-of-the-art
            technology and insights to decode user behavior, predict their
            actions, and create immersive experiences that resonate deeply with
            audiences. We focus on simplifying marketing, enabling profound
            brand attraction at an unprecedented scale.
          </p>
          <div className="mt-12 text-center w-56 bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
            Get in-dept details ->
          </div>
        </div>
      </div>
      <div className="px-44 pb-20  pt-20 w-full h-full bg-gainsboro relative flex gap-8">
        <div className="w-3/6 flex flex-col justify-between">
          <div>
            <img
              className="p-2 shadow-button w-9 bg-white-0 absolute top-8"
              src="/assets/stars-icon.svg"
              alt="star-icon"
            />
            <h6 className="text-5xl font-bold">
              Frequently Asked Questions about
            </h6>
            <h1 className=" text-5xl font-bold pt-4 leading-[48px] home-page-linear">
              Growth <br /> Management <br /> Platform
            </h1>
          </div>
          <div className="mt-12 text-center w-56 bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
            Get in-dept details ->
          </div>
        </div>
        <div className="w-3/6">
          <div>
            <h6 className="text-lg font-semibold text-grayx-100">
              What is a Growth Management Platform (GMP)?
            </h6>
            <p className="pt-3 text-grayx-500">
              A Growth Management Platform (GMP) is a comprehensive software
              solution designed to streamline and optimize marketing, sales, and
              business growth processes. It combines data analytics, user
              behavior insights, and marketing automation to help businesses
              achieve their growth goals.
            </p>
          </div>
          <div>
            <h6 className="pt-8 text-lg font-semibold text-grayx-100">
              How is GMP different from other marketing tools?
            </h6>
            <p className="pt-3 text-grayx-500">
              Unlike many other marketing tools that focus on specific aspects
              of marketing, GMP offers an all-in-one solution. It integrates
              analytics, segmentation, automation, and personalization to
              provide a holistic approach to business growth, and that is
              exactly what Algorithm X provides.
            </p>
          </div>
          <div>
            <h6 className="pt-8 text-lg font-semibold text-grayx-100">
              What are the key features of a GMP?
            </h6>
            <p className="pt-3 text-grayx-500">
              Key features include data integration, user behavior tracking,
              segmentation, marketing automation, personalization, and
              analytics, all working together to optimize marketing efforts and
              drive sales growth.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white-0 flex justify-center p-20 ">
        <div className="flex flex-col  items-center w-3/6">
          <img
            className="p-2 shadow-button w-9 bg-white-0"
            src="/assets/stars-icon.svg"
            alt="star-icon"
          />
          <h5 className="text-[40px] text-grayx-100 font-bold text-center">
            Feel Free To <br /> Get In Touch With Us <br /> & Get More Info
          </h5>
          <div className="w-full pt-12 flex items-center flex-col">
            <InputText
              name="name"
              placeholder="Name"
              required
              className="border-2 rounded-md p-3 border-lightGray w-full"
            />
            <InputText
              name="email"
              placeholder="E-mail"
              required
              className="border-2  mt-4 rounded-md p-3 border-lightGray w-full"
            />
            <InputTextarea
              className="border-2  mt-4 rounded-md p-3 border-lightGray w-full"
              name="message"
              placeholder="Messsage"
              rows={10}
            />
            <div className="bg-darkBlue-200 w-full mt-2 p-4 rounded-md text-center text-white-100 font-semibold cursor-pointer select-none">
              Send Message
            </div>

            <div className="mt-12 text-center bg-white-0 text-darkBlue-200 py-3 px-5 font-semibold shadow-button rounded-md cursor-pointer">
              There are more ways to contact us ->
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
