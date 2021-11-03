import React from 'react';
import "../../../stylesheets/NetworkPage/SuggestionCard.css";


const SuggestionCard = (props) => {
    return (
       <div className="suggestionCard">
       <div className="cross">
           x
       </div>
       <img src={props.suggestion.img} alt="" />
       <div className="info">
           <h1 className="name">{props.suggestion.name}</h1>
           <h3 className="companyName">{props.suggestion.companyName}</h3>
           <div className="connections">
               <h2 className="number">{props.suggestion.connections}</h2>
               <p>Connections</p>
           </div>
           <button>Connect</button>
       </div>
       </div>
    )
}

export default SuggestionCard;