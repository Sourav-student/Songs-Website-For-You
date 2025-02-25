import React, { useState } from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.svg'
import youtube from '../assets/youtube.svg'
import bollywood from '../assets/bollywood.svg'
import video from '../assets/video.svg'
import nocopy from '../assets/nocopy.svg'
import hamebarger from '../assets/hamburger.svg'
import { NavLink } from 'react-router-dom'

const header = () => {

    const handleburger = () => {
        const slit = document.getElementById('slit')
        slit.style.left = "0";
    }

    const handleburger2 = () => {
        const slit = document.getElementById('slit')
        slit.style.left = "-100%";
    }

    return (
        <>
            <header>
                <div className='flex align-middle p-[6px] flex-wrap justify-between'>
                    <div onClick={handleburger}><img src={hamebarger} alt="burger" className=' cursor-pointer h-12' id='logo' /></div>
                    <div><img src={logo} alt="logo" className='h-12 cursor-pointer max-md:h-10' /></div>
                </div>
            </header>
            <div className="container bg-[#2C3E50] w-[280px] h-[100vh] absolute top-0 p-[6px] left-[-100%] z-10" id='slit'>
                <div className='flex justify-between' id='logo'>
                    <div><img src={hamebarger} alt="burger" className=' cursor-pointer h-12 invert' onClick={handleburger2} /></div>
                    <div><img src={logo} alt="logo" className='h-12 cursor-pointer' /></div>
                </div>
                <nav className='text-[15px] fixed h-full p-2 text-white'>
                    <ul>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex text-[20px] gap-3'>
                            <div>
                                <img src={home} alt="home" />
                            </div>
                            <div>Home</div>
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/video_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex text-[20px] gap-3'>
                            <div>
                                <img src={video} alt="video" />
                            </div>
                            <div>Video Song</div>
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/bollywood_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex text-[20px] gap-3'>
                            <div>
                                <img src={bollywood} alt="bollywood" />
                            </div>
                            <div>BollyWood Songs</div>
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/youtubers_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex text-[20px] gap-3'>
                        <div>
                                <img src={youtube} alt="youtube" />
                            </div>
                            <div>Youtubers Songs</div>
                        </li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/no_copyright_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex text-[20px] gap-3'>
                        <div>
                                <img src={nocopy} alt="nocopy" />
                            </div>
                            <div>No Copyright</div>
                        </li></NavLink>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default header
