import React from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);

const ErrorPage = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h1", {
      y: -100,
      scale: 0,
      duration: 0.5
    })

    tl.from("button", {
      y: 100,
      scale: 0,
      duration: 0.5
    })
  }, []);

  return (
    <div className='flex flex-col justify-center items-center bg-[#6ea9dd] w-full h-[90vh] text-white'>
      <h1 className='relative text-3xl max-md:text-4xl p-4 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'>404 - Page Not Found</h1>
      <NavLink to="/"><button className='m-4 p-4 rounded-lg bg-[#4b6fe0] hover:bg-[#2442a0]'>Go Back To Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
