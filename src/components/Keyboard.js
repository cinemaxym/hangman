import '../styles/keyboardStyle.css' // Imports the CSS file for styling the keyboard
import { useState } from 'react' // Imports the useState hook from React
import { randomWord } from './Words'; // Imports the function that generates a random word
import { useEffect } from 'react'; // Imports the useEffect hook from React
import VisualStates from './VisualStates'; // Imports VisualStates component
import Score from './Score'; // Imports Score component
import { Button } from 'react-bootstrap'; // Import the Bootstrap Button component


function Keyboard() {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'] // Array of letters of the alphabet
    const [correctGuesses, setCorrectGusses] = useState([]) // State variable for correct guesses
    const [secretWord, setSecretWord] = useState("_ _ _ _ _") // State variable for the secret word
    const [guesses, setGuesses] = useState([]) // State variable for the user's guesses
    const [mistake, setMistake] = useState(0) // State variable for the number of mistakes

    function handleGuess(event) {
        let letter = event.target.value; // Gets the letter that was clicked
        setGuesses([...guesses, letter]); // Adds the letter to the list of guesses
        setMistake(state => state + (secretWord.includes(letter) ? 0 : 1)) // Increases the number of mistakes if the letter is not in the secret word
        if (secretWord.includes(letter)) {
            setCorrectGusses([...correctGuesses, letter]); // Adds the letter to the list of correct guesses if it is in the secret word
        }
    }

    useEffect(() => {                // Generates a new secret word 
        setSecretWord(randomWord())
    }, [])


    function maskedWord() {                 // Generates masked word 
        return secretWord.split('').map(letter =>
            correctGuesses.includes(letter) ? letter : " _ ") // Replaces unguessed letters with underscores and guessed letters with the letter itself
    }


    const youWon = secretWord === maskedWord().join("");  // Checks if the user has won
    if (youWon) {
        alert("You Won!!!") // Alerts the user if they have won
    }

    useEffect(() => {
        const youLost = mistake >= 11;  // Checks if the user has lost
        if (youLost) {
            alert("You Lost!!!")   // Alerts the user if they have lost
        }
    }, [mistake])


    function restartGame() {
        window.location.reload();  // Reloads the page to restart the game
    }

    return (
        <div className='keyboard-container'>
            <div className='word'>{maskedWord()}</div>  {/* Callback maskedWord to render the masked word */}
            <div className='flex-container'>
                <VisualStates mistake={mistake} />  {/* sends props to VisualStates component and trigers it */}
                <div className="keyboard">
                    {/* Generates the keyboard buttons within handleGuess callback*/}
                    {alphabet.map((letter, index) => (
                        <button
                            key={index}
                            value={letter}
                            disabled={guesses.includes(letter)}
                            onClick={handleGuess} >{letter}</button>
                    ))}
                </div>
                {/* sends props to Score component and trigers it  */}
                <Score
                    mistake={mistake}
                />
            </div>
            <Button onClick={restartGame} variant="primary" size="lg" >  {/* Renders the restart button 
            within restartGame callback */}
                Restart Game
            </Button>
        </div>
    )
}

export default Keyboard; //exports for import 