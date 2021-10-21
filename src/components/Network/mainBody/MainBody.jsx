import React from 'react';
import "../../../stylesheets/NetworkPage/MainBody.css";


function MainBody() {
    return (
        <div className="container">
            <div className="top_buttons">
                <button className="recieved_button">
                    Recieved
                </button>
                <button clssName="sent_button">
                    Sent
                </button>
            </div>
        </div>
    )
}

export default MainBody
