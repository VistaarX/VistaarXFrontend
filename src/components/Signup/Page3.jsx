import React from 'react'
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Page3 = ({ marginLeft, width, values, handleChange, setPage, handleClickShowPassword, 
    handleMouseDownPassword, page, userTypes, setUserTypes, wantTo, wantToOptions }) => {
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
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{margin: '0 auto', boxShadow: '0 10px 10px rgb(0 0 0 / 10%)', padding: '70px', marginBottom: '20px'}}
                >
                    <FormControlLabel value="manufacturer" control={<Radio style={{color: 'black'}}/>} label="Manufacturer" />
                    <FormControlLabel value="distributor" control={<Radio style={{color: 'black'}}/>} label="Distributor" />
                    <FormControlLabel value="retailer" control={<Radio style={{color: 'black'}}/>} label="Retailer" />
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
            }}
                onClick={() => setPage(page + 1)}>
                Next
            </Button>
        </React.Fragment>
    )
    else return (
        <React.Fragment>
            Enter 4 digit code
        </React.Fragment>
    )
}

export default Page3
