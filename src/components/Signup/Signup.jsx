import { Typography } from '@mui/material'
import React from 'react'
import SignupFields from './SignupFields'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../../stylesheets/Signup.css'

const Signup = () => {
    const userTypes = ['Manufacturer', 'Distributor', 'Retailer']

    if (window.innerWidth<=1024) 
    return (
        <div className='signupBox'>

            <SignupFields marginLeft='5%' width='90%' userTypes={userTypes}/>

            <Button style={{
                background:"#0A66C2",
                color:'white',
                textTransform:'none',
                width: '90%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginBottom:'46px',
                marginLeft: '5%'
            }}>
                Sign Up
            </Button>
            
            <Typography style={{
                fontWeight: '300',
                fontSize: '18px',
                lineHeight: '27px',
                alignSelf:'center',
                marginBottom: '46px',
                textAlign: 'center'
            }}>
                OR
            </Typography>

            <p>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </div>
    )

    else return (
        <div className='signupBox'>
            <SignupFields marginLeft='50%' width='45%' userTypes={userTypes}/>
            <br/>
            <p className='loginText'>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </div>
    )
}

export default Signup
