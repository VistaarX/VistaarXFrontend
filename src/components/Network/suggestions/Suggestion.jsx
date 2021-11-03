import React, { useState } from 'react';
import ConnectionCard from './ConnectionCard';
import SuggestionCard from './SuggestionCard';
import ProfilePic from './profile_pic.png';
import "../../../stylesheets/NetworkPage/Suggestion.css";

const Suggestion = () => {
    const [connectUp1, setConnectUp1] = useState(true)
    const [count, setCount] = useState(8)
    const [display, setDisplay] = useState(true)
    
    const [connectDisplay, setconnectDisplay] = useState(true)

    const [connectionRequests, setConnectionRequests ] = useState([{
        profilePic: '',                 //Add route to profile pic
        name: 'Deepanshu',
        designation: 'React Developer',
        connections: '630'
    }, {
        profilePic: '',
        name: 'Keshav',
        designation: 'Backend Developer',
        connections: '670'
    }])

    const [connectCount, setConnectCount] = useState(connectionRequests.length)

    const suggestions = [{
        name: 'Mrinal',
        connections: '400',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Raj',
        connections: '500',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }]


    return (
        <>
            <div className="more_connections">
                <div className="connection">
                    <div className="heading-1">
                        <div className="box_1"><hr /></div>
                        <div className="text"><p>YOU HAVE <span>{connectCount} MORE CONNECTIONS</span></p></div>
                        <div className="box_1"><hr /></div>
                    </div>

                    <div className="pending">
                        {connectionRequests.map(({ name, designation, connections }, index) => <ConnectionCard name={name} designation={designation} 
                        connections={connections} index={index} connectionRequests={connectionRequests} setConnectionRequests={setConnectionRequests}
                        connectCount={connectCount} setConnectCount={setConnectCount}/>)}
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
                        suggestions.map((suggestion) => {
                            return <SuggestionCard suggestion={suggestion} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Suggestion
