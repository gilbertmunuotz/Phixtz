import React from 'react';
import { motion, } from "framer-motion";
import Abantu from "../Images/Bantu.png";
import About from "../Images/AboutUs.jpg";
import Quick from '../Images/qd.png';

import Btrend from '../Images/Bussines.jpg';
import WebDevelopment from '../Images/Web Dev.jpg';
import SoftwareTesting from "../Images/Abstract.jpg";

function Body() {
    return (
        <div className='Body'>
            <h1 className='font-bold text-black text-5xl text-center mt-40'>Transform your Business</h1>

            <div className='grid grid-cols-3 gap-8 sm:block mx-12'>
                <p1 className="font-serif my-6 ml-20 text-3xl col-span-2 tracking-wide">Are you looking for top-notch software development services in Dar es Salaam, Tanzania? Look no further than Phixtz Trust us to take your business to the next level with our innovative software solutions.</p1>
                <motion.img src={Btrend} alt="Busines Trend" className='h-72 w-80 md:w-96' drag
                    dragConstraints={{ left: 0, right: 30 }}
                    dragElastic={0.8} />
            </div>

            <div className="text-center">
                <h2 className='font-bold text-4xl mt-40'>🌟We Invest In Digital World🌍</h2>
                <p2 className='font-medium text-xl sm:text-center'>Create responsive websites and web applications to improve online presence and engage customers</p2>
            </div>


            <h3 className='font-bold mt-48 ml-10 sm:text-center text-4xl md:ml-8'>What Do We Do.</h3>
            <h4>Are you ready to be part of the digital revolution? At phix company , we're on a mission to invest .</h4>
            <div className='grid mt-6 gap-6 sm:block md:grid-cols-2 lg:grid-cols-3'>
                <motion.img src={WebDevelopment} alt="Mac Book Air 2022" className='rounded-xl cursor-pointer hover sm:bg-contain px-5' whileHover={{ scale: 1.1 }} />
                <div className="lg:row-start-2">
                    <h4 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Web Development</h4>
                    <p3 className='sm:font-serif mx-4 text-2xl mb-3 text-left'>Create responsive websites and web applications to improve online presence and engage customers.</p3>
                </div>


                <motion.img src={SoftwareTesting} alt="Mobile Phone Displaying Applications" className='rounded-xl cursor-pointer sm:bg-contain px-5' whileHover={{ scale: 1.1 }} />
                <div className="lg:row-start-2">
                    <h5 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Mobile App Development</h5>
                    <p4 className='sm:font-serif mx-4 text-2xl mb-3 text-left'>Design and develop customized mobile apps for Android and iOS platforms to reach a wider audience</p4>
                </div>

                <motion.img src={SoftwareTesting} alt="Ipone 15 in Action" className='rounded-xl cursor-pointer sm:bg-contain px-5' whileHover={{ scale: 1.1 }} />
                <div className="lg:row-start-2">
                    <h6 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Software Testing</h6>
                    <p5 className='sm:font-serif mx-4 text-2xl mb-3 text-left'>Thoroughly test software applications to ensure high-quality performance and functionality.</p5>
                </div>
            </div>


            <h6 className='font-bold text-5xl mt-24 ml-10 mb-6'>Our Products</h6>
            <section className='grid grid-cols-2 bg-gray-300 py-12 mx-36 rounded-lg shadow-2xl shadow-gray-400 p-8 mb-12 sm:mx-4 md:mx-7 '>
                <img src={Abantu} alt="" className='h-20 w-28' />
                <div className="">
                    <h7 className='font-bold uppercase'>Abantuway</h7>
                    <p6 className='block'> Here at <a href="https://abantuway.com/" /*style="color: blue;" */ >AbantuWay</a>,will help you store and track your sales and stock informations with little efforts</p6>
                </div>
            </section>

            <section className='grid grid-cols-2 bg-gray-300 py-12 mx-36 rounded-lg shadow-2xl shadow-gray-400 p-8 mb-12 sm:mx-4 md:mx-7 '>
                <img src={Quick} alt="" className='h-20 w-28' />
                <div className="">
                    <h7 className='font-bold uppercase'>QuickDrop</h7>
                    <p6 className='block'>
                        Our service is designed to streamline the shopping experience and ensure your items are delivered promptly to your doorstep
                    </p6>

                </div>
            </section>

            <div className="aboutUs">
                <div className="text-center">
                    <h8 className='text-black font-bold text-5xl'>About Us</h8>
                </div>
                <div className="flex justify-between m-16 gap-7">
                    <p7 className='mt-6'> Welcome to Phixtz, a leading software development company located in Kinondoni, Dar es Salaam. We are dedicated to delivering innovative and high-quality software solutions to meet the unique needs of our clients.With a team of experienced and skilled professionals, we strive to exceed expectations and provide exceptional service to our clients. Our commitment to excellence and customer satisfaction sets us apart in the industry.</p7>
                    <img src={About} alt="Phixtz company" className='rounded-xl h-80' />
                </div>
            </div>



        </div>
    )
}

export default Body