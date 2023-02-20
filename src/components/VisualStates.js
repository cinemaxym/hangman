import state1 from "../images/state1.GIF"; //imports images of visual state 
import state2 from "../images/state2.GIF"; 
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.gif";
import state11 from "../images/state11.GIF";

import "../styles/visualStateStyles.css"  // Imports the CSS file for styling Visual states

//VisualStates component 
function VisualStates(props){     //creates an array with 11 images of Visual States  
    let states = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11] 

    return( //gets props from the parent component and returnes an element   
        <div className="container">
            <img src={states[props.mistake]} alt="" />
        </div>
    )
}

export default VisualStates; //exports for import
