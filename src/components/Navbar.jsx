import { NavLink } from 'react-router-dom'
import bollywood from '../assets/bollywood.svg'
import home from '../assets/home.svg'
import youtube from '../assets/youtube.svg'

const Navbar = () => {
    return (
        <nav className='text-[15px] max-md:hidden fixed bg-[#2C3E50] h-full p-2 text-[#FFFFFF]'>
            <ul>
                <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex flex-col justify-center items-center gap-2'>
                    <div>
                        <img src={home} alt="home" />
                    </div>
                    <div>Home</div>
                </li></NavLink>
                <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/bollywood_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex flex-col justify-center items-center gap-2'>
                    <div>
                        <img src={bollywood} alt="bollywood" />
                    </div>
                    <div>BollyWood Songs</div>
                </li></NavLink>
                <NavLink className={(e) => { return e.isActive ? " bg-green-600 text-yellow-300" : "" }} to="/youtubers_songs"><li className=' mb-7 cursor-pointer bg-[#3498DB] hover:bg-[#5DADE2] p-1 rounded-lg flex flex-col justify-center items-center gap-2'>
                    <div>
                        <img src={youtube} alt="youtube" />
                    </div>
                    <div>Youtubers Songs</div>
                </li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
