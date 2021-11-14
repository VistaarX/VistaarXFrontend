import React from 'react'
import ConnectionCard from './ConnectionCard';
import { Search } from '@material-ui/icons';
import '../../stylesheets/Connections/Connections.css'
const Connections = () => {
    return (
        <div className="connections">
            <div className="header">
                Connections
            </div>
            <div className="search">
                <Search/>
                <input placeholder="search by name"  />
            </div>
            <ConnectionCard/>
            <ConnectionCard/>
            <ConnectionCard/>
            <ConnectionCard/>
            <ConnectionCard/>
            <ConnectionCard/>
        </div>
    )
}

export default Connections
