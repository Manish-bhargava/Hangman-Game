import React, { useState, useEffect } from 'react';
import Button from '@/Components/Buttons/Button';
import MaskedString from '@/Components/MaskedString/MaskedString';
import { useNavigate } from 'react-router-dom';
import level1 from '../assets/Images/1.svg';
import level2 from '../assets/Images/2.svg';
import level3 from '../assets/Images/3.svg';
import level4 from '../assets/Images/4.svg';
import level5 from '../assets/Images/5.svg';
import level6 from '../assets/Images/6.svg';
import level7 from '../assets/Images/7.svg';
import level8 from '../assets/Images/8.svg';
import { words } from './db'; // Import the words from db.js

const images = [level1, level2, level3, level4, level5, level6, level7, level8];

function SinglePlayerGame() {
    const [toast, setToast] = useState("");
    const [display, setDisplay] = useState([]);  // Stores the guessed letters
    const [level, setLevel] = useState(0);       // Tracks the number of incorrect guesses
    const [word, setWord] = useState("");        // The actual word to guess
    const [hint, setHint] = useState("");        // The hint for the word
    const navigate = useNavigate();

    // Select a random word from the imported list
    function selectRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        const selectedWord = words[randomIndex].wordValue;
        setWord(selectedWord);
        setHint(words[randomIndex].wordHint);
        setDisplay(new Array(selectedWord.length).fill("_"));  // Initialize masked string
        setLevel(0);  // Reset the game state
    }

    // Select a random word on component mount
    useEffect(() => {
        selectRandomWord();
    }, []); // Empty array ensures this runs once on mount

    // Handle button click and update the game state
    const buttonHandler = (letter) => {
        if (word.toUpperCase().includes(letter)) {
            // Update the display with the correct letter
            const updatedDisplay = display.map((char, index) =>
                word[index].toUpperCase() === letter ? letter : char
            );
            setDisplay(updatedDisplay);
        } else {
            // Increment the level if the guess is incorrect
            setLevel((prevLevel) => Math.min(prevLevel + 1, images.length - 1));
        }

        // Check if the word is fully guessed or if the game is lost
        if (display.join('') === word.toUpperCase()) {
            setToast('You win!');
        } else if (level === images.length - 1) {
            setToast('You lost! Try again!');
        }
    };

    // Game Over or Win Toast
    const handleToastClick = () => {
        setToast(""); // Reset the toast
        navigate("/"); // Navigate to the homepage or reset the game
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-between px-4 sm:px-6 lg:px-12 space-y-5">
            <div className="text-3xl sm:text-4xl font-bold mt-4 text-center">Hangman Game</div>
            
            <div className="flex flex-col items-center space-y-2">
                <MaskedString actualWord={word} guessesWord={display} />
                <div className="text-gray-500 text-sm sm:text-base">Hint: {hint}</div>
            </div>

            {/* Image container */}
            <div className="w-[270px] h-[270px] sm:w-[350px] sm:h-[350px] flex justify-center items-center">
                <img src={images[level]} alt="Hangman Image" className="w-full h-full object-contain" />
            </div>

            {/* Button component */}
            <Button word={word} buttonHandler={buttonHandler} />

            {/* Toast notification */}
            {toast && (
                <button
                    onClick={handleToastClick}
                    className={`fixed top-[40vh] left-1/2 transform -translate-x-1/2 p-4 rounded-lg font-bold z-50 transition-colors ${
                        toast === 'You win!' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    {toast}
                </button>
            )}
        </div>
    );
}

export default SinglePlayerGame;
