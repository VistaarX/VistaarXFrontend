import React, { Fragment } from 'react'
import { acceptConnectionReq, cancelSentReq, declineConnectionReq } from '../../../Api/user/userActions';

const ConnectionCard = ({ name, connections_length, company_name, profile_pic, decider, request_id, onclick}) => {
    const handleConnect=async ()=>{
        await acceptConnectionReq(request_id);
        onclick();
        console.log("Request accepted");
    }
    const handleDecline=async ()=>{
        await declineConnectionReq(request_id);
        onclick();
        console.log("Request declined");
    }
    const handleRevoke=async ()=>{
        await cancelSentReq(request_id);
        onclick();
        console.log("Request revoked");
    }
    return <div className="pending_box">
        <div className="pending_pic">
            <div className="picture">
                <img src={profile_pic} alt="Profile picture"></img>
            </div>
        </div>

        <div className="pending_info">
            <p className="pending_name">{name}</p>
            <p className="pending_work">Owner of: {company_name}</p>
            <p className="pending_connections">{`${connections_length} connections`}</p>
        </div>

        <div className="pending_buttons">
            {decider===true ? 
                <Fragment>
                    <button className="pending_button connect_" onClick={handleConnect}>CONNECT</button>
                    <button className="pending_button decline_" onClick={handleDecline}>DECLINE</button>
                </Fragment>
                :
                <button className="pending_button decline_" onClick={handleRevoke}>REVOKE</button>
            }
        </div>

    </div>
}



export default ConnectionCard