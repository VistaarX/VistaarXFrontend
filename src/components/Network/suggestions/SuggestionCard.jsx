import React, { useState } from 'react';
import { GiCancel } from "react-icons/gi";

const SuggestionCard = ({name, companyName, connections}) => {
    return (
        <>

            {/* <div className="employee_card"> */}
            <div className="cross" onClick={() => {

            }}>
                <span><GiCancel size={27} /></span>
            </div>

            <div className="profile_pic">
                {/* Add image tag */}
            </div>

            <div className="emp_details">
                <h2>{name}</h2>
                <p>{companyName}</p>
            </div>

            <div className="emp_connection"><h3>{connections}</h3><p>connections</p></div>
            <div className="emp_button">

                <button onClick={() => {
                    
                }}>

                </button>
            </div>

            {/* </div> */}
        </>
    )
}

export default SuggestionCard;