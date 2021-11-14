import React from 'react';
import { sendConnectionReq } from '../../../Api/user/userActions';
import "../../../stylesheets/NetworkPage/SuggestionCard.css";


const SuggestionCard = (props) => {
    const handle_send_request=async ()=>{
        await sendConnectionReq(props.suggestion._id);
        props.onclick();
        console.log("Request sent");
    }
    return (
       <div className="suggestionCard">
       <div className="cross" onClick={props.oncancel}>
           x
       </div>
       <img src={props.suggestion.profile_pic ? props.suggestion.profile_pic : null} alt="" />
       <div className="info">
           <h1 className="name">{props.suggestion.name}</h1>
           <h3 className="companyName">{props.suggestion.company_profile ? props.suggestion.company_profile.name : ""}</h3>
           <div className="connections">
               <h2 className="number">{props.suggestion.connections.length}</h2>
               <p>Connections</p>
           </div>
           <button onClick={handle_send_request}>Connect</button>
       </div>
       </div>
    )
}

export default SuggestionCard;