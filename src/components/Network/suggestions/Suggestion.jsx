import React, { Fragment, useEffect } from 'react';
import ConnectionCard from './ConnectionCard';
import SuggestionCard from './SuggestionCard';
import ProfilePic from './profile_pic.png';
import "../../../stylesheets/NetworkPage/Suggestion.css";

const Suggestion = (props) => {
    const connectionRequests=props.received_requests ? props.received_requests:[];
    const deliveredRequests=props.sent_requests ? props.sent_requests:[];
    
    return (
        <>
            <div className="more_connections">
                <div className="connection">
                    <div className="heading-1">
                        <div className="box_1"><hr /></div>
                        <div className="text"><p>YOU HAVE 
                            {props.toggle_state===true ? 
                                <span> {connectionRequests.length} MORE CONNECTIONS</span> :
                                <span> {deliveredRequests.length} SENT CONNECTIONS</span>
                            }
                            </p></div>
                        <div className="box_1"><hr /></div>
                    </div>

                    <div className="pending">
                        {props.toggle_state===true ? 
                            connectionRequests.lenght !=0 ?
                            connectionRequests.map((request, index) =>{
                                return (
                                <Fragment key={index}><ConnectionCard 
                                    name={request.user.name} 
                                    connections_length={request.user.connections.length} 
                                    company_name={request.user.company_profile ? request.user.company_profile.name : ""}
                                    profile_pic={request.user.profile_pic ? request.user.profile_pic : ProfilePic}
                                    decider={props.toggle_state}
                                    request_id={request.id}
                                    onclick={()=>{props.getUpdatedList(); props.handleToggle(true)}}
                                /></Fragment> )
                            }):null
                            :
                            deliveredRequests.length != 0 ?
                            deliveredRequests.map((request, index) =>{
                                return (
                                    <Fragment key={index}><ConnectionCard 
                                    name={request.user.name} 
                                    connections_length={request.user.connections.length} 
                                    index={index}
                                    company_name={request.user.company_profile ? request.user.company_profile.name : ""}
                                    profile_pic={request.user.profile_pic ? request.user.profile_pic : ProfilePic}
                                    decider={props.toggle_state}
                                    request_id={request.id}
                                    onclick={()=>{props.getUpdatedList(); props.handleToggle(false)}}
                                /></Fragment> )
                            }) : null
                        }
                    </div>

                    <div className="heading-1">
                        <div className="box_1"><hr /></div>
                        <div className="text"><p>MORE SUGGESTIONS FOR YOU</p></div>
                        <div className="box_1"><hr /></div>
                    </div>
                </div>
            </div>

            <div className="employee_container">
                <div className="emplyoees">
                    {
                        props.suggestions.map((suggestion, index) => {
                            suggestion['button_text']=undefined;
                            for (let i = 0; i < connectionRequests.length; i++) {
                                const element = connectionRequests[i]; 
                                if(element.user.name===suggestion.name){
                                    suggestion['button_text']="Request received";
                                }
                            }
                            for (let i = 0; i < deliveredRequests.length; i++) {
                                const element = deliveredRequests[i]; 
                                if(element.user.name===suggestion.name){
                                    suggestion['button_text']="Request sent";
                                }
                            }
                            console.log(suggestion.name, suggestion.button_text)
                            return <Fragment key={index}>
                                <SuggestionCard suggestion={suggestion} oncancel={()=>props.oncancel(suggestion._id)} onclick={()=>{props.getUpdatedList(); props.handleToggle(false)}}/>
                                </Fragment>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Suggestion
