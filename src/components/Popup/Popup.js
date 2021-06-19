import React from 'react';
import './Popup.css'

function Popup(props) {

    return(props.trigger)? (
        
            <div className="popupbody">
            <span class="close" onClick={()=>props.setTrigger(false)}>&times;</span>
                
                {props.children}
            </div>
        
    ):"";
}

export default Popup
