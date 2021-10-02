import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Lock } from '@material-ui/icons';
import { Button } from '@mui/material';
const LoginFields = () => {
    const [values, setValues] = React.useState({
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
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <OutlinedInput 
            style={{
                width:"90%",
                background:'white',
                margin:'10px'
            }}
            placeholder="Email"
            startAdornment={
                <InputAdornment position="start">
                    <AlternateEmailIcon/>
                </InputAdornment>
            }>
                
            </OutlinedInput>
          <OutlinedInput
            style={{
                    width:"90%",
                    background:'white',
                    margin:'10px'
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
                width:'200px',
                alignSelf:'flex-end',
                color:'#203341',
                marginBottom:'20px'
            }}>
                Forgot Password?
            </Button>
          
        </div>
    )
}

export default LoginFields
