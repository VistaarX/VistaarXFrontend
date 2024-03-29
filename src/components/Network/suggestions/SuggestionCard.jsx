import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { sendConnectionReq } from '../../../Api/user/userActions';
import "../../../stylesheets/NetworkPage/SuggestionCard.css";


const SuggestionCard = (props) => {
    const handle_send_request=async (button_text)=>{
        if(button_text===undefined){
            await sendConnectionReq(props.suggestion._id);
            props.onclick();
            console.log("Request sent");
        }
        else{
            console.log("As ",button_text," already, unable to make request")
        }
    }
    return (
       <div className="suggestionCard">
       <div className="cross" onClick={props.oncancel}>
           x
       </div>
       <img src={props.suggestion.profile_pic ? props.suggestion.profile_pic : null} alt="" />
       <div className="info">
           <Link className="name" to={`/user/employee/${props.suggestion._id}`}>
            <h1 className="name">{props.suggestion.name}</h1>
            </Link>
            <h3 className="companyName">{props.suggestion.company_profile ? props.suggestion.company_profile.name : ""}</h3>
           <div className="connections">
               <h2 className="number">{props.suggestion.connections.length}</h2>
               <p>Connections</p>
           </div>
           <button onClick={()=>handle_send_request(props.suggestion.button_text)}>
               {props.suggestion.button_text===undefined?"Connect":props.suggestion.button_text}
            </button>
       </div>
       </div>
    )
}

export default SuggestionCard;