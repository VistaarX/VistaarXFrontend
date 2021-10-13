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
import { Typography } from '@mui/material';


const Page1 = ({ marginLeft, width, values, handleChange, setPage, handleClickShowPassword, handleMouseDownPassword, page }) => {
    
    return (
        <React.Fragment>
            <Typography style={{
                paddingBottom: '30px',
                paddingLeft: '10px',
                textAlign: 'center',
                marginTop: '46px',
                boxSizing: 'border-box',
                fontSize: '48px'
            }} fontWeight="800">
                <Typography style={{ fontWeight: '500', fontSize: '30px', display: 'inline-block' }}>Welcome to </Typography>&#160;Vistaar<Typography style={{ color: '#0A66C2', fontWeight: '800', display: 'inline-block', fontSize: '48px' }}>X</Typography>
            </Typography>

            <p>Full Name</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                onChange={handleChange('name')}
                placeholder="John Snow" required>
            </OutlinedInput>
            <br /><br />

            <p>Email</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                onChange={handleChange('email')}
                placeholder="Email"
                startAdornment={
                    <InputAdornment position="start">
                        <AlternateEmailIcon />
                    </InputAdornment>
                } required>
            </OutlinedInput>
            <br /><br />

            <p>Phone</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                startAdornment={
                    <InputAdornment position="start">
                        +91
                    </InputAdornment>
                }
                onChange={handleChange('phone')}
                inputProps={{ pattern: "[0-9]{10}" }} required>
            </OutlinedInput>
            <br /><br />

            <p>Password</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white'
                }}
                variant="filled"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                placeholder="Password"
                startAdornment={
                    <InputAdornment position='start'>
                        <Lock />
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
            <br /><br />

            <p>Gender</p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={values.gender}
                onChange={handleChange('gender')}
                style={{ width: '100%' }}
            >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
            <br /><br />

            <Button style={{
                background: "#0A66C2",
                color: 'white',
                textTransform: 'none',
                width: '100%',
                alignSelf: 'center',
                fontWeight: '500',
                fontSize: '30px',
                boxSizing: 'border-box',
                paddingTop: '10px'
            }}
                type="submit">
                Next
            </Button>
        </React.Fragment>
    )
}

export default Page1
