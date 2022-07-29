import React, { useState } from "react";
import {BiUser} from  "react-icons/bi";
import Parking2 from "./button2";
import Parking3 from './button3';
import Parking4 from './buttons4';
import Parking5 from './button5';

import "./parking.css";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"

function Parking1() {
    const [click,setclick] = useState(true);
    return(
        <div className="Parking">
            
            <button className="AboutUs" onClick={()=> setclick(!click)}><div className="user"><BiUser size={30} /></div>About Us <p className="paragraph">4 articles in this topics</p><div className="Arrow">{click? <MdKeyboardArrowUp size={30}/>: <MdKeyboardArrowDown size={30}/>}</div></button>
            {click &&<div className="description"><Parking2/> <Parking3/> <Parking4/> <Parking5/></div> }
            </div>
            

  
    
    )
}





export default Parking1