import React from 'react'
import "../../../stylesheets/User/Employee.css"
import Post from "../Post"
const Employee = () => {
    return (
        <div className='employee'>
            <div className='employee__headBox'>
                <div className='employee__avatar'>
                    {/* Add Avatar img here */}
                </div>
            </div>

            <div className='employee__info'>
                <div className='employee__detail'>
                    <h1>Shivam Raj</h1>
                    <h5>Owner of ABC Technologies Pvt.LTD</h5>
                    <h5>Lives in Delhi, India</h5>
                </div>
                <div className='employee__connection'>
                    <h1>654</h1>
                    <h5>Connections</h5>
                </div>
            </div>

            <h3 className='employee__title'> Your Posts </h3>
            <br/>

            <Post />
        </div>
    )
}

export default Employee