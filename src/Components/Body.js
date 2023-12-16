import React from 'react'
import WebDevelopment from '../Images/Web Development.jpg'
import MobileAppDevelopment from '../Images/Mobile App Development.jpg'
import SoftwareTesting from "../Images/Apple-iPhone-15-Pro-lineup-ProRes-video-shoot-230912.jpg";

function Body() {
    return (
        <div className='Body'>
            <h1 className="border-b-2 border-y-black font-serif my-6 mx-8 text-3xl">Are you looking for top-notch software development services in Kinondoni, Dar es Salaam? Look no further than Phixtz.Our team of skilled developers is dedicated to delivering high-quality, customized solutions to meet your business needs. Whether you need web development, mobile app creation, or software integration,Phixtz has the expertise to bring your vision to life. Trust us to take your business to the next level with our innovative software solutions.</h1>
            <h2 className='font-bold sm:text-center text-4xl'>What Do We Do.</h2>
            <img src={WebDevelopment} alt="Mac Book Air 2022" className='rounded-3xl sm:bg-contain px-2' />
            <h3 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Web Development</h3>
            <p className='sm:font-serif text-center mx-4 text-2xl mb-3'>Create responsive websites and web applications to improve online presence and engage customers.</p>
            <img src={MobileAppDevelopment} alt="Mobile Phone Displaying Applications " className='rounded-3xl sm:bg-contain px-2' />
            <h4 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Mobile App Development</h4>
            <p className='sm:font-serif text-center mx-4 text-2xl mb-3'>Design and develop customized mobile apps for Android and iOS platforms to reach a wider audience</p>
            <img src={SoftwareTesting} alt="Ipone 15 in Action" className='rounded-3xl sm:bg-contain px-2' />
            <h5 className='sm:text-left font-serif font-bold text-3xl ml-4 mt-3'>Software Testing</h5>
            <p className='border-b-2 border-y-black sm:font-serif text-center mx-4 text-2xl mb-3'>Thoroughly test software applications to ensure high-quality performance and functionality.</p>
            <hr className="border border-gray-900" />

            <h6>Our Products</h6>



        </div>
    )
}

export default Body