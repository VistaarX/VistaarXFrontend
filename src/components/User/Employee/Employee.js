import React,{ useEffect, useState} from 'react'
import { userDetails } from '../../../Api/user/fetchRequests';
import "../../../stylesheets/User/Employee.css"
import Post from "../Post"
const Employee = () => {
    const [user, setUser]=useState(null);
    useEffect(async()=>{
        console.log("USEEFFECT")
        let data=await userDetails();
        console.log(data.data.user)
        setUser(data.data.user);
    },[]);
    if(user!==null){
    return (
        <div className='employee'>
            <div className='employee__headBox'>
                <div className='employee__avatar'>
                    <img src={user.profile_pic ? user.profile_pic : ""} alt="Profile pic"></img>
                </div>
            </div>

            <div className='employee__info'>
                <div className='employee__detail'>
                    <h1>{user.name}</h1>
                    <h5>Owner of {user.company_profile ? user.company_profile.name : ""}</h5>
                    <h5>Lives in Delhi, India</h5>
                </div>
                <div className='employee__connection'>
                    <h1>{user.connections.length}</h1>
                    <h5>Connections</h5>
                </div>
            </div>

            <h3 className='employee__title'> Your Posts </h3>
            <br/>

            <Post posts_array={user.posts} company={user.company_profile ? user.company_profile.name : ""}/>
        </div>
    )
    }
    else{
        return <></>
    }
}

export default Employee