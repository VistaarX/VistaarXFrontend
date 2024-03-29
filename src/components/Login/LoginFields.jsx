import React, { useState } from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import {handleLogin} from '../../Api/auth'
import { Lock } from '@material-ui/icons';
import { Button } from '@mui/material';
import { Redirect } from 'react-router';
const LoginFields = ({ marginLeft, width }) => {
  const [redirect, setRedirect]=useState(false)
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleclick=async ()=>{
        let res=await handleLogin(values); 
        if(res!==null){
          console.log("Successful Login");
          setRedirect(true);
        }
      }
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
    if(redirect==true || localStorage.getItem('JWT')!==null){
      return <Redirect to="/"></Redirect>
    }
    else{
    return (
      <>
        <div>
            <OutlinedInput 
            style={{
                width: width,
                background: 'white',
                marginLeft: marginLeft,
                boxSizing:'border-box'
            }}
            
            value = {values.email}
            onChange={handleChange('email')}
            placeholder="Email"
            startAdornment={
                <InputAdornment position="start">
                    <AlternateEmailIcon/>
                </InputAdornment>
            }>
            </OutlinedInput>
          
          <OutlinedInput
            style={{
                    width: width,
                    background:'white',
                    marginTop: '10px',
                    marginLeft: marginLeft
                }}
            variant="filled"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            placeholder="Password"
            startAdornment={
                <InputAdornment position='start'>
                    <Lock/>
                </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          
          <Button style={{
                textTransform:'none',
                paddingRight: '5%',
                color:'#203341',
                marginBottom:'20px',
                float: 'right',
                display: 'block',
                textAlign: 'right'
            }} className='forgotPassword'>
                Forgot Password?
            </Button>
            
        </div>

        {/* Gave button here to link with login */}
        <Button onClick={() => handleclick()} style={{
                background:"#0A66C2",
                color:'white',
                textTransform:'none',
                width: '41%',
                height: '46px',
                alignSelf:'center',
                fontWeight:'600',
                marginBottom:'46px',
                marginLeft: '50%',
            }}>
                Login
            </Button>
        </>
    )
    }
}

export default LoginFields
