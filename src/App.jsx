import React from 'react'
import Header from './components/header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import VideoSongs from './components/video_songs'
import BollyWood_Song from './components/BollyWood_Song'
import Youtubers_Song from './components/Youtubers_Song'
import No_copyright from './components/no_copyright'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <div className='sticky top-0 w-full z-50 bg-[#34495E]'>
          <Header />
        </div>
        <Navbar />
        <Home />
      </>
    },
    {
      path: '/video_songs',
      element: <><div className='sticky top-0 w-full z-50 bg-[#34495E]'>
        <Header />
      </div>
        <Navbar />
        < VideoSongs /></>
    },
    {
      path: '/bollywood_songs',
      element: <><div className='sticky top-0 w-full z-50 bg-[#34495E]'>
        <Header />
      </div><Navbar />
        <BollyWood_Song /></>
    },
    {
      path: '/youtubers_songs',
      element: <><div className='sticky top-0 w-full z-50 bg-[#34495E]'>
        <Header />
      </div><Navbar />
        < Youtubers_Song /></>
    },
    {
      path: '/no_copyright_songs',
      element: <><div className='sticky top-0 w-full z-50 bg-[#34495E]'>
        <Header />
      </div><Navbar />
        < No_copyright /></>
    }
  ])
  return (
    <>
      <div className=' relative'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
