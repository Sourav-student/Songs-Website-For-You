import Header from './components/header'
import Navbar from './components/Navbar'
import Router from './Routers/Router'

const App = () => {

  return (
    <>
      <div className=' relative'>
        <div className='sticky top-0 w-full z-50 bg-[#34495E]'>
          <Header />
        </div>
        <Navbar />
        <Router />
      </div>
    </>
  )
}

export default App
