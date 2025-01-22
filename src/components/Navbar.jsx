import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='text-[15px] max-md:hidden fixed bg-orange-700 h-full p-2 text-white'>
            <ul>
                <NavLink className={(e)=>{return e.isActive?" bg-green-600 text-yellow-300":""}} to="/"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                        Home
                    </li></NavLink>
                <NavLink className={(e)=>{return e.isActive?" bg-green-600 text-yellow-300":""}} to="/video_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                        Video Songs
                    </li></NavLink>
                <NavLink className={(e)=>{return e.isActive?" bg-green-600 text-yellow-300":""}} to="/bollywood_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                        BollyWood Songs
                    </li></NavLink>
                <NavLink className={(e)=>{return e.isActive?" bg-green-600 text-yellow-300":""}} to="/youtubers_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                        YouTubers Songs
                    </li></NavLink>
                <NavLink className={(e)=>{return e.isActive?" bg-green-600 text-yellow-300":""}} to="/no_copyright_songs"><li className=' mb-7 cursor-pointer bg-orange-950 p-1 rounded-lg'>
                        No Copyright
                    </li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
