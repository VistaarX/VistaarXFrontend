import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Lock } from '@material-ui/icons';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const SignupFields = ({ marginLeft, width }) => {
    const [page, setPage] = React.useState(1)

    const [values, setValues] = React.useState({
        gender: 'Male',
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
        <form className='signupFields'>
            <p>Full Name</p>
            <OutlinedInput 
            style={{
                width: '100%',
                background: 'white',
                boxSizing:'border-box'
            }}
            placeholder="John Snow" required>
            </OutlinedInput>
            <br/><br/>

            <p>Email</p>
            <OutlinedInput 
            style={{
                width: '100%',
                background: 'white',
                boxSizing:'border-box'
            }}
            placeholder="Email"
            startAdornment={
                <InputAdornment position="start">
                    <AlternateEmailIcon/>
                </InputAdornment>
            } required>
            </OutlinedInput>
            <br/><br/>

            <p>Phone</p>
            <OutlinedInput 
            style={{
                width: '100%',
                background: 'white',
                boxSizing:'border-box'
            }}
            startAdornment={
                <InputAdornment position="start">
                    +91
                </InputAdornment>
            }
            inputProps={{ pattern: "[0-9]{10}" }} required>
            </OutlinedInput>
            <br/><br/>

            <p>Password</p>
            <OutlinedInput
            style={{
                    width: '100%',
                    background:'white'
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
            required
          />
          <br/><br/>

          {/* <Button style={{
                textTransform:'none',
                paddingRight: '5%',
                color:'#203341',
                marginBottom:'20px',
                float: 'right',
                display: 'block',
                textAlign: 'right'
            }} className='forgotPassword'>
                Forgot Password?
            </Button> */}

            <p>Gender</p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={values.gender}
                onChange={handleChange('gender')}
                style={{width: '100%'}}
                >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
            <br/><br/>

            <Button style={{
                background:"#0A66C2",
                color:'white',
                textTransform:'none',
                width: '100%',
                alignSelf:'center',
                fontWeight:'500',
                fontSize: '30px',
                boxSizing: 'border-box',
                paddingTop: '10px'
            }}
            onClick={()=>setPage(page+1)}>
                Next
            </Button>
        </form>
    )
}

export default SignupFields
