import React from 'react'
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import JoinExisting from './JoinExisting';
import { Link } from 'react-router-dom';

const Page3 = ({ marginLeft, width, values, setPage, handleClickShowPassword, 
    handleMouseDownPassword, page, userType, userTypes, setUserType, wantTo, wantToOptions, setValues }) => {

    const handleUserTypeChange = event => {
        setUserType(event.target.value)
    }

    if(wantTo===wantToOptions[1]) return (
        <React.Fragment>
            <Typography style={{
                paddingBottom:'30px',
                paddingLeft: '10px', 
                textAlign:'center', 
                marginTop: '46px', 
                boxSizing: 'border-box',
                fontSize: '48px'
            }} fontWeight="800">
                Are you a?
            </Typography>

            <FormControl component="fieldset" style={{margin: '0 auto', width: '100%'}}>
                <RadioGroup
                    aria-label="userType"
                    value={userType}
                    name="radio-buttons-group"
                    style={{margin: '0 auto', boxShadow: '0 10px 10px rgb(0 0 0 / 10%)', padding: '70px', marginBottom: '20px'}}
                    onChange={ handleUserTypeChange }
                >
                    <FormControlLabel value={userTypes[0]} control={<Radio style={{color: 'black'}}/>} label={userTypes[0]} />
                    <FormControlLabel value={userTypes[1]} control={<Radio style={{color: 'black'}}/>} label={userTypes[1]} />
                    <FormControlLabel value={userTypes[2]} control={<Radio style={{color: 'black'}}/>} label={userTypes[2]} />
                </RadioGroup>
            </FormControl>

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
            }} type="submit">
                Next
            </Button>
            <br /><br />

            
            <p className='loginText' style={{marginBottom: '2vh'}}>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </React.Fragment>
    )
    else return (
        <div style={{display: 'table-cell', verticalAlign: 'middle', width: '100vw', height: '95vh'}}>
            <JoinExisting setValues={setValues} values={values}/>
        </div>
    )
}

export default Page3
