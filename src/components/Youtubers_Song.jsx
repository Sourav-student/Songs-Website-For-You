import React from 'react'
import { useEffect } from 'react'
import songs from '../assets/songs.js'

function Home() {

  useEffect(() => {
    const audioContainer = document.querySelector('.audio');

      for (let j = 0; j < songs[2].length; j++) {

        const container = document.createElement('div');
        container.className = 'p-2 gap-3 rounded-xl flex flex-col shadow-md m-2 bg-[#7ea058] shadow-green-300';
        container.innerHTML = `
          <img src=${songs[2][j].image} alt=${songs[2][j].title} class='w-[300px] h-60 rounded-xl mx-auto cursor-pointer'/>
          <audio src=${songs[2][j].song} controls controlslist="nodownload"></audio>
          <p class = ' font-serif max-w-[300px] text-slate-900'><b>Title</b> - ${songs[2][j].title}</p>
          <p class = ' font-serif max-w-[300px] text-slate-900'><b>Singer</b> - ${songs[2][j].Singer}</p>`;

        audioContainer.appendChild(container);
      }
  }, []);

  return (
    <>
      <main className='w-auto ml-[140px] max-md:ml-3'>
        <div className='audio flex flex-wrap justify-around align-middle'></div>
      </main>
    </>
  )
}

export default Home
