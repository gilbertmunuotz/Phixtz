import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='Footer'>
      <div className="grid grid-cols-2 bg-black p-20">
        <div className="col-span-1">
          <h1 className='text-white uppercase text-4xl'>company</h1>
          <h3 className='text-white my-4 ml-7'>Mentorship</h3>
          <h3 className='text-white my-4 ml-7'>Join Us</h3>
          <h2 className='text-white my-4 ml-7'>About Us</h2>

        </div>
        <div className="col-span-1 ml-36">
          <h2 className='text-white my-5'> <FaInstagram size={'2rem'} /></h2>
          <h2 className='text-white my-5'> <FaFacebook size={'2rem'} /></h2>
          <h2 className='text-white my-5'><FaLinkedin size={'2rem'} /></h2>
        </div>
      </div>


      <div className="flex justify-evenly bg-black">
        <h4 className='text-white'>info@phixtz.com <FaEnvelope size={'2rem'} /></h4>
        <h4 className='text-white'> +255 683 602 474  <FaPhone size={'2rem'} /></h4>
      </div>


    </div>
  )
}

export default Footer