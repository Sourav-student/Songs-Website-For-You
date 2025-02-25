import React from 'react'
import { useEffect } from 'react'
import songs from '../assets/songs.js'

function no_copyright() {
 
  useEffect(() => {
    const audioContainer = document.querySelector('.audio');

    for (let i = 0; i < songs.length; i++) {
      for (let j = 0; j < songs[i].length; j++) {

        const container = document.createElement('div');
        container.className = 'p-2 gap-3 rounded-xl flex flex-col shadow-md m-2 bg-[#FFFFFF] shadow-[#0000001A]';
        container.innerHTML = `
          <img src=${songs[i][j].image} alt=${songs[i][j].title} class='w-[300px] h-60 rounded-xl mx-auto cursor-pointer'/>
          <audio src=${songs[i][j].song} controls controlslist="nodownload"></audio>
          <p class = ' font-serif max-w-[300px] text-[#2C3E50]'><b>Title</b> - ${songs[i][j].title}</p>
          <p class = ' font-serif max-w-[300px] text-[#2C3E50]'><b>Singer</b> - ${songs[i][j].Singer}</p>`;

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

export default no_copyright
