import { Typography } from '@mui/material'
import React from 'react'
import LoginFields from './LoginFields'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
    if (window.innerWidth<=1024) 
    return (
        <div className='loginBox'>
            <Typography style={{paddingBottom:'30px',paddingLeft:'10px', textAlign:'center', marginTop: '46px'}} fontSize="30px" fontWeight="800">
                Login
            </Typography>

            <LoginFields marginLeft='5%' width='90%'/>

            <Button style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '90%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginBottom:'46px',
                marginLeft: '5%'
            }}>
                Login
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

            <Button style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '90%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginLeft: '5%'
            }}>
                Create new Account
            </Button>
        </div>
    )

    else return (
        <div className='loginBox'>
            <Typography style={{
                paddingBottom:'30px',
                paddingLeft: '10px', 
                textAlign:'center', 
                marginTop: '46px', 
                boxSizing: 'border-box',
                width: '45%',
                marginLeft: '50%'
            }} fontSize="30px" fontWeight="800">
                Login
            </Typography>

            <LoginFields marginLeft='50%' width='45%'/>

            <Button style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '45%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginBottom:'46px',
                marginLeft: '50%'
            }}>
                Login
            </Button>

            <Typography style={{
                fontWeight: '300',
                fontSize: '18px',
                lineHeight: '27px',
                alignSelf:'center',
                marginBottom: '46px',
                textAlign: 'center',
                width: '45%',
                boxSizing: 'border-box',
                marginLeft: '50%'
            }}>
                OR
            </Typography>

          
            <Button component={Link} to="/signup" style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '45%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginLeft: '50%'
            }}> 
                Create new Account
            </Button>
        </div>
    )
}

export default Login


