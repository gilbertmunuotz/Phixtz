/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Abstract from '../Images/Abstract.jpg'

function Header() {
  return (
    <section className="bg-cover bg-center bg-no-repeat sm:h-80 md:h-80 lg:h-96 xl:h-96" style={{ backgroundImage: `url(${Abstract})` }}>
      <div className="mx-auto flex flex-col items-center justify-center text-white px-4 pt-12">
        <span className="font-bold sm:text-center text-5xl">
          <Typewriter
            options={{
              strings: ['Transform Your Business'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <p className="mb-8 leading-relaxed sm:text-center text-lg">
          Phixtz offers expert software development solutions to help your business thrive. </p>
        <Link to={'/AboutUs'} className='rounded-full'>Learn More</Link>
      </div>
    </section>

  )
}

export default Header
