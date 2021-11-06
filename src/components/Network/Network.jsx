import React, { useEffect, useState } from 'react';
import { fetchIncomingRequest, fetchSentRequest, getRecommendedUsers } from '../../Api/user/fetchRequests';
import MainBody from './mainBody/MainBody';
import Suggestions from './suggestions/Suggestion';

const Network = () => {
    const [sent_requests, set_sent_requests]=useState([]);
    const [received_requests, set_received_requests]=useState([]);
    const [suggestions, setSuggestions] = useState([])
    let [toggle_state, setToggleState]=useState(true);

    useEffect(async()=>{
        getReceivedRequests();
        let suggestions=await getRecommendedUsers();
        setSuggestions(suggestions['data'].recommended_users)
    },[])
    const getReceivedRequests= async ()=>{
        let requests=await fetchIncomingRequest();
        set_received_requests(requests['data'].connections);
        handleToggle(true);
    }
    const getSentRequests= async ()=>{
        let requests=await fetchSentRequest();
        set_sent_requests(requests['data'].connections);
        handleToggle(false);
    }
    const handleToggle=(value)=>{
        setToggleState(value)
    }
    const handlePop=(id)=>{
        let new_suggestion=suggestions.filter((i)=>i._id!=id);
        setSuggestions(new_suggestion);
    }

    return <React.Fragment>
        <MainBody getSentRequests={getSentRequests} getReceivedRequests={getReceivedRequests} toggle_state={toggle_state}/>
        <Suggestions 
            sent_requests={sent_requests} 
            received_requests={received_requests} 
            suggestions={suggestions} 
            toggle_state={toggle_state} 
            getSentRequests={getSentRequests} 
            getReceivedRequests={getReceivedRequests} 
            oncancel={(id)=>handlePop(id)}/>
    </React.Fragment>
}

export default Network
