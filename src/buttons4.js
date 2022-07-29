import React, { useState } from "react";
import {MdKeyboardArrowRight,MdKeyboardArrowUp} from "react-icons/md"
import "./parking.css";
function Parking4(){
    const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            
            <button className="AboutUs" onClick={() => setclick(!click)}>What do you do? <div className="Arrow">{click ? <MdKeyboardArrowUp size={30} />:<MdKeyboardArrowRight size={30}  />}</div> </button>
            {click && <div className="description">Outdoors activities like rock climbing, hiking, cycling, etc.Reading, learning, documentaries, podcasts, etc.
            Crossword puzzles, chess, sudoku, or other puzzle games.Cooking.Travel.GardeningArt, music, crafts, writing, podcasting.Volunteer work.</div>}
            </div>
           

)
}
export default Parking4