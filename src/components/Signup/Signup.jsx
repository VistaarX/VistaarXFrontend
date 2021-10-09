import { Typography } from '@mui/material'
import React from 'react'
import SignupFields from './SignupFields'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../../stylesheets/Signup.css'

const Signup = () => {
    if (window.innerWidth<=1024) 
    return (
        <div className='signupBox'>
            <Typography style={{paddingBottom:'30px',paddingLeft:'10px', textAlign:'center', marginTop: '46px'}} fontSize="30px" fontWeight="800">
                Sign Up
            </Typography>

            <SignupFields marginLeft='5%' width='90%'/>

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
                Want to Log in? <Link to='\login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </div>
    )

    else return (
        <div className='signupBox'>
            <Typography style={{
                paddingBottom:'30px',
                paddingLeft: '10px', 
                textAlign:'center', 
                marginTop: '46px', 
                boxSizing: 'border-box',
                fontSize: '48px'
            }} fontWeight="800">
                <Typography style={{fontWeight: '500', fontSize: '30px', display: 'inline-block'}}>Welcome to </Typography>&#160;Vistaar<Typography style={{color: '#0A66C2', fontWeight: '800', display:'inline-block', fontSize: '48px'}}>X</Typography>
            </Typography>

            <SignupFields marginLeft='50%' width='45%'/>
            <br/>
            <p className='loginText'>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </div>
    )
}

export default Signup
