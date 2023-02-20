import "../styles/scoreStyles.css" // Imports the CSS file for styling Score
import { useState, useEffect } from "react"; 


//Score component 
function Score(props) {
    const [mistake, setMistake] = useState(props) // State variable for the number of mistakes which synchronyzes by getting props from the parent element 

    useEffect(() =>{        //useEffect hook is listening for changes in props and calls setMistake on change 
        setMistake(props)
    },[props])

    return (
        <div className="score-container">
            <h4>WRONG</h4>
            <h1>{mistake.mistake}</h1>
        </div>
    )
}

export default Score; //exports for import 
