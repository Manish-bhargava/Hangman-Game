import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate();
    function MultiplayerHandler(){
        navigate('/startGame')
    }
  return (
    
    <>
    <div className='w-screen h-screen  bg-[url(https://c1.wallpaperflare.com/preview/703/967/600/rope-red-folding-chair-blood.jpg)]    bg-cover bg-center flex flex-col items-center justify-center gap-[70px]'>
        <div className='text-white    top-[140px] text-center  flex flex-col'><span className='text-[55px] font-bold'>Hangman Challenge</span><span className='text-[30px]'> Test Your Word Skills</span></div>
        <div className='flex  flex-col gap-[30px]'>
            <button className='text-white bg-blue-500 hover:bg-blue-400 p-3 rounded' onClick={()=>{navigate("/singleplayer")}}>Single player</button>
            <button className='text-white bg-gray-500 p-3 rounded hover:bg-gray-400 ' onClick={MultiplayerHandler}>Multi  player</button>
        </div>
        <div className='text-center text-white'>
            Hangman is a classic word-guessing game whire you must guess the mystery word one <br />
          letter at a time with each worng guess, part of the hangman figre appears! Save the <br /> hangman by solving the word before you run out of Cahnces. Chanllenge your vocabuklary, test <br />
          your word skills, and have fun in this thrilling puzzle game.
         </div>
    </div>
    </>
  )
}

export default HomePage