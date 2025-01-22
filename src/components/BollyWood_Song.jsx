import React from 'react'
import { useState, useEffect } from 'react'
import songs from '../assets/songs.js'

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const audioContainer = document.querySelector('.audio');

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < songs[i].length; j++) {

        const container = document.createElement('div');
        container.className = 'p-2 gap-3 rounded-xl flex flex-col shadow-md m-2 bg-[#7ea058] shadow-green-300';
        container.innerHTML = `
          <img src=${songs[i][j].image} alt=${songs[i][j].title} class='w-[300px] h-60 rounded-xl mx-auto cursor-pointer'/>
          <audio src=${songs[i][j].song} controls controlslist="nodownload"></audio>
          <p class = ' font-serif max-w-[300px] text-slate-900'><b>Title</b> - ${songs[i][j].title}</p>
          <p class = ' font-serif max-w-[300px] text-slate-900'><b>Singer</b> - ${songs[i][j].Singer}</p>`;

        audioContainer.appendChild(container);
      }
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
