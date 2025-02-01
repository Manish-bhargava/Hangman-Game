import React, { useState } from 'react';

const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

// Button Component: Displays the alphabet buttons and tracks the guessed letters
function Button({ buttonHandler, word }) {
    // State to track the guessed letters
    const [guessedLetters, setGuessedLetters] = useState([]);

    // Function to get the button style
    function getButtonStyle(letter) {
        if (guessedLetters.includes(letter)) {
            if (word.toUpperCase().includes(letter)) {
                return "bg-green-500"; // Correct guess
            } else {
                return "bg-red-500"; // Incorrect guess
            }
        } else {
            return "bg-blue-500"; // Default color (not guessed yet)
        }
    }

    // Handle button click and update the guessed letters state
    const handleClick = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
            buttonHandler(letter); // Pass the guessed letter to the parent handler
        }
    };

    return (
        <div className='flex justify-center w-full max-w-2xl p-[15px] mb-5 items-center flex-wrap'>
            {alphabets.map((item) => (
                <button
                    key={item}
                    value={item}
                    onClick={() => handleClick(item)} // Trigger handleClick with the letter
                    className={`${getButtonStyle(item)} text-white w-12 h-12 rounded m-2 p-2 flex justify-center items-center`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Button;
