import React, { useState } from "react";
import {MdKeyboardArrowRight,MdKeyboardArrowUp} from "react-icons/md"
import "./parking.css";
function Parking5(){
    const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            
            <button className="AboutUs" onClick={() => setclick(!click)}>When was the first Parkname founded<div className="Arrow" > {click ? <MdKeyboardArrowUp size={30}   />:<MdKeyboardArrowRight  size={30}  />} </div></button>
            {click && <div className="description">Established in 1872 and located primarily in Wyoming, Yellowstone National Park was America's first national park.</div>}
            </div>
            
)
}
export default Parking5