import React from 'react';
import "../../../stylesheets/NetworkPage/MainBody.css";


function MainBody(props) {
    return (
        <div className="container">
            <div className="top_buttons">
                <button className={props.toggle_state===true ? "received_button" : "sent_button"} onClick={(e)=>{props.getReceivedRequests()}}>
                    Received
                </button>
                <button className={props.toggle_state===false ? "received_button" : "sent_button"} onClick={(e)=>{props.getSentRequests()}}>
                    Sent
                </button>
            </div>
        </div>
    )
}

export default MainBody
