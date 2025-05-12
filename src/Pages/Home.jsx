import { useEffect } from 'react'
import songs from '../assets/songs.js'

function Home() {

  useEffect(() => {
    const audioContainer = document.querySelector('#audioContainer');

    songs[0].forEach((song) => {
      const container = document.createElement('div');
      container.classList = "p-2 gap-3 rounded-xl flex flex-col shadow-md m-2 bg-[#FFFFFF] shadow-[#0000001A]"
      container.innerHTML = `<img src="${song.image}" alt=${song.title} class='w-[300px] h-60 rounded-xl mx-auto cursor-pointer' />
                 <audio src=${song.song} controls controlslist="nodownload"></audio>
                <p class = ' font-serif max-w-[300px] text-slate-900'><b>Title</b> - ${song.title}</p>
                <p class = ' font-serif max-w-[300px] text-slate-900'><b>Singer</b> - ${song.Singer}</p>`

      audioContainer.appendChild(container);
    })

    //Control playing audio
    const audioElement = document.querySelectorAll('audio');
    audioElement.forEach((audio) => {
      audio.addEventListener("play", () => {
        audioElement.forEach((otherAuido) => {
          if (otherAuido != audio) {
            otherAuido.pause();
          }
        })
      })
    })


  }, [])


  return (
    <>
      <main className='w-auto ml-[140px] max-md:ml-3'>
        <div className='flex flex-wrap justify-around align-middle' id='audioContainer'></div>
      </main>
    </>
  )
}

export default Home