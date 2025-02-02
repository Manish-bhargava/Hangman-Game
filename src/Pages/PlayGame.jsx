import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
function PlayGame() {
    const Navigate=useNavigate();
    const [hide,setHide]=useState("Show");
    const [password,setPassword]=useState("password");
    const [inputWord,setInputWord]=useState("");
    const [inputHint,setHint]=useState("")
    function hideHandler(){
    if(hide=="Show"){
        setHide("Hide");
        setPassword("text");
    }
    else{
        setHide("Show");
        setPassword("password");
    }
    }
    function onSubmitHandler(){
        Navigate("/game",{state:{word:inputWord,hint:inputHint}})
    }
  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex flex-col items-center justify-center  space-y-[150px]">
    <div className="text-[35px] font-bold  text-center ">Start a New Hangman Game</div>
    
    <div className="bg-gray-800 p-6 w-[60vw] max-w-[600px] justify-center rounded-lg space-y-10">
      <div className="flex flex-col space-y-2">
        <label htmlFor="word" className="text-lg">Enter a word or Phrase</label>
        <input
          type={password}
          id="password"
          value={inputWord}
          onChange={(e)=>{setInputWord(e.target.value)}}
          className="p-2 rounded text-black"
          placeholder="Enter the word"
        />
      </div>
  
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="word" className="text-lg">Optional hint</label>
        <input
          type="text"
          id="word"
          value={inputHint}
          onChange={(e)=>{setHint(e.target.value)}}
          name="word"
            
          className="p-2 rounded text-black"
          placeholder="Optional hint"
        />
      </div>
  
      <div className="flex space-x-4 flex-wrap items-center justify-center">
        <button className="bg-yellow-600 w-[70px] p-3 rounded" onClick={hideHandler}>{hide}</button>
        <button className="bg-blue-600 p-3 rounded" onClick={onSubmitHandler}>Submit</button>
      </div>
    </div>

    <Link to="/" className="hover:text-blue-500 hover:underline">return to home page</Link>
  </div>
  
  )
}

export default PlayGame