import React, { useState } from 'react'
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
import JoinExisting from './JoinExisting';
import { Link } from 'react-router-dom';

const Page2 = ({ marginLeft, width, wantTo, setWantTo, wantToOptions }) => {

    let style1 = {boxShadow: '0 10px 10px rgb(0 0 0 / 10%)', cursor: 'pointer'}
    let style2 = {boxShadow: '0 10px 10px rgb(0 0 0 / 10%)', cursor: 'pointer'}
    
    if(wantTo===wantToOptions[0]) {
        style1={...style1, border: '2px solid #4d4d4d'}
    }
    else if(wantTo===wantToOptions[1]) style2={...style2, border: '2px solid #4d4d4d'}

    return (
        <React.Fragment>
            <Typography style={{
                paddingBottom:'30px',
                paddingLeft: '10px', 
                textAlign:'center', 
                marginTop: '46px', 
                boxSizing: 'border-box',
                fontSize: '48px'
            }} fontWeight="800">
                Want to? 
            </Typography>
        
            <br /><br />
            <div className='page2'>

                <div onClick={()=>{setWantTo(wantToOptions[0])}} className='wantToOptions' style={style1}>
                    <Typography style={{
                        paddingBottom:'30px',
                        paddingLeft: '10px', 
                        textAlign:'center', 
                        marginTop: '46px', 
                        boxSizing: 'border-box',
                        fontSize: 'calc(12px + 2em)',
                        fontWeight: '500'
                    }} >
                        {wantToOptions[0]}
                    </Typography>
                </div>

                <div onClick={()=>{setWantTo(wantToOptions[1])}} className='wantToOptions' style={style2}>
                    <Typography style={{
                        paddingBottom:'30px',
                        paddingLeft: '10px', 
                        textAlign:'center', 
                        marginTop: '46px', 
                        boxSizing: 'border-box',
                        fontSize: 'calc(12px + 2em)',
                        fontWeight: '500'
                    }} >
                        {wantToOptions[1]}
                    </Typography>
                </div>

            </div>
            <br /><br /><br />
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
            <br /><br />

            
            <p className='loginText' style={{marginBottom: '2vh'}}>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </React.Fragment>
    )
}

export default Page2
