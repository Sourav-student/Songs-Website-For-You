import Header from './components/header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import BollyWood_Song from './components/BollyWood_Song'
import Youtubers_Song from './components/Youtubers_Song'
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
