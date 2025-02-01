import React, { useState } from 'react';
import Button from '@/Components/Buttons/Button';
import MaskedString from '@/Components/MaskedString/MaskedString';
import { useLocation } from 'react-router-dom';
import level1 from '../assets/Images/1.svg'; 
import level2 from '../assets/Images/2.svg'; 
import level3 from '../assets/Images/3.svg'; 
import level4 from '../assets/Images/4.svg'; 
import level5 from '../assets/Images/5.svg'; 
import level6 from '../assets/Images/6.svg'; 
import level7 from '../assets/Images/7.svg'; 
import level8 from '../assets/Images/8.svg'; 
import { useNavigate } from 'react-router-dom';
const images=[level1,level2,level3,level4,level5,level6,level7,level8];
import { useEffect } from 'react';
function GamePage() {
    
    const { state } = useLocation();
const [toast, setToast] = useState("");
const navigate=useNavigate();
    let i=0;
    const [display, setDisplay] = useState([]);
    const [level,setLevel]=useState(0);
    const [img, setImg] = useState("");
 
  
    useEffect(() => {
         
        if (display.join('') === state.word.toUpperCase()) {
          setToast('You win!');
        } else if (level === images.length - 1) {
          setToast('You lost! Try again!');
        }
      }, [display, level, state.word]);
    
    return (
        <>   {
         
        }
            <div className="bg-gray-900 h-screen text-white flex items-center flex-col space-y-5 justify-between">
                <div className="text-3xl font-bold mt-[20px]">Hangman Game</div>
                <div className="flex flex-col items-center space-y-2">
                    <MaskedString actualWord={state.word} guessesWord={display}></MaskedString>
                    <div className="text-gray-500">Hint: {state.hint}</div>
                </div>
                            
                <div className="w-[270px] h-[270px] ">
                    <img src={images[level]} alt="Hangman Image" />
                </div>

                <Button      word={state.word}
                    buttonHandler={(e) => {
                        if(state.word.toUpperCase().includes(e)){
                            console.log("coorect");
                        }
                        else{
                            console.log(level);

                            if(level>=7){
                            
                            setLevel(7);
                            return ;}
                            else{
                                setLevel(level+1);

                            }
                        }
                        setDisplay([...display, e]);
                    }}
                ></Button>

{toast && (
        <button  onClick={
            ()=>{
                
            navigate("/");

            }
        }
          style={{
            position: 'fixed',
            top: '40vh',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '20px 20px',
            backgroundColor: toast === 'You win!' ? 'green' : 'red',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
            zIndex: '1000',
          }}
        >
          {toast}
        </button>
      )}
            </div>
        </>
    );
}

export default GamePage;
