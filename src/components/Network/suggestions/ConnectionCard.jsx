import React, { useState } from 'react'

const ConnectionCard = ({ name, designation, connections, index, connectCount, connectionRequests, setConnectCount, setConnectionRequests }) => {
    return <div className="pending_box">
        <div className="pending_pic">
            <div className="picture">
                {
                    //Add image tag with src=route to profilePic
                }
            </div>
        </div>

        <div className="pending_info">
            <p className="pending_name">{name}</p>
            <p className="pending_work">{designation}</p>
            <p className="pending_connections">{`${connections} connections`}</p>
        </div>

        <div className="pending_buttons">
            <button className="pending_button connect_" onClick={() => {
                let indexToRemove = index
                // setConnectionRequests(connectionRequests.filter(item => item !== connectionRequests[indexToRemove]))
                setConnectCount(connectCount - 1)
                //setConnectionsRequest(get request)
            }

            }>CONNECT{
                    // use ? statement, run query on database to check if user is connected and change text accordingly
                }
            </button>

            <button className="pending_button decline_" onClick={() => {
                let indexToRemove = index
                setConnectionRequests(connectionRequests.filter(item => item !== connectionRequests[indexToRemove]))
                setConnectCount(connectCount - 1)
            }
            }>DECLINE
            </button>

        </div>

    </div>
}



export default ConnectionCard