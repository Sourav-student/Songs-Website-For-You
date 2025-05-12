import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Router from './Routers/Router';
import Icon from './assets/website.png'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative'>
      {isLoading ? (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
          <img src={Icon} alt="icon" className=' cursor-pointer w-32 animation-scale' />
          <p className='text-5xl font-serif font-thin text-animation scale-1'>Musicscape</p>
        </div>
      ) : (
        <div className='animate-div'>
          <div className='sticky top-0 w-full z-50 bg-[#34495E]'>
            <Header />
          </div>
          <Navbar />
          <Router />
        </div>
      )}
    </div>
  );
};

export default App;