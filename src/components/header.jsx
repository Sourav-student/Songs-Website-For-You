import React, { useState } from 'react'
import logo from '../assets/logo.png'
import hamebarger from '../assets/hamburger.svg'
import { NavLink } from 'react-router-dom'

const header = () => {

    const handleTheme = () => {
        if (document.body.style.backgroundColor != 'white') {

            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            document.body.style.transition = 'all 1s linear'
            document.getElementById('logo').style.filter = 'invert(0%)'
        }

        else if (document.body.style.backgroundColor != 'rgb(39, 34, 34)') {
            document.body.style.backgroundColor = 'rgb(39, 34, 34)'
            document.body.style.color = 'white'
            document.body.style.transition = 'all 1s linear'
            document.getElementById('logo').style.filter = 'invert(100%)'
        }

    }

    const handleburger = () => {
        const slit = document.getElementById('slit')
        slit.style.left = "0"
        slit.style.transition = "all 0.3s linear"
    }

    const handleburger2 = () => {
        const slit = document.getElementById('slit')
        slit.style.left = "-100%"
        slit.style.transition = "all 0.3s linear"
    }

    return (
        <>
            <header>
                <div className='flex align-middle p-[6px] pl-0 pr-0 flex-wrap justify-between'>
                    <div className='flex gap-[3vw]'>
                        <div onClick={handleburger}><img src={hamebarger} alt="burger" className=' cursor-pointer h-12' id='logo' /></div>
                        <div><img src={logo} alt="logo" className='h-12 cursor-pointer max-md:h-10' /></div>
                    </div>

                    <div className='flex gap-[5vw] justify-center flex-wrap ml-[4vw]'>
                        <button className='bg-neutral-700 text-white cursor-pointer rounded-2xl text-[15px] p-2' onClick={handleTheme}>Change Theme</button>
                    </div>
                </div>
            </header>
            <div className="container bg-orange-700 w-[280px] h-[100vh] absolute top-0 p-[6px] left-[-100%] z-10" id='slit'>
                <div className='flex justify-between' id='logo'>
                    <div><img src={hamebarger} alt="burger" className=' cursor-pointer h-12 invert' onClick={handleburger2} /></div>
                    <div><img src={logo} alt="logo" className='h-12 cursor-pointer' /></div>
                </div>
                <nav className='text-[15px] max-md:hidden fixed bg-orange-700 h-full p-2 text-white'>
                    <ul>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                            Home
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/video_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                            Video Songs
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/bollywood_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                            BollyWood Songs
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/youtubers_song"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                            YouTubers Songs
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/no_copyright_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                            No Copyright
                        </li></NavLink>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default header
