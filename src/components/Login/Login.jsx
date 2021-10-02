import { Typography } from '@mui/material'
import React from 'react'
import LoginFields from './LoginFields'
import { Button } from '@mui/material'

const Login = () => {
    
    return (
        <div className='loginBox' style={{
            background:'#C4C4C4',
            height:'100vh',
            width:'100%',
            padding:'80px 0',
            display:'flex',
            flexDirection:'column',
            position:'fixed'
        }}>
            <Typography style={{paddingBottom:'30px',paddingLeft:'10px'}} fontSize="30px" fontWeight="800">
                Login
            </Typography>
            <LoginFields/>
            {/* <Button style={{
                textTransform:'none',
                width:'10%',
                alignSelf:'flex-end',
                color:'#203341',
                display:'inline'
            }}>
                Forgot Password?
            </Button>  */}
            <Button style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '255px',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginBottom:'100px'
            }}>
                Login
            </Button>
            
            <Typography style={{
                fontWeight: '300',
                fontSize: '18px',
                lineHeight: '27px',
                alignSelf:'center',
                paddingBottom:'20px'
            }}>
                Dont have an account?
            </Typography>
            <Button style={{
                background:"#203341",
                color:'white',
                textTransform:'none',
                width: '255px',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600'
            }}>
                Create new Account
            </Button>
            

            
        </div>
    )
}

export default Login


