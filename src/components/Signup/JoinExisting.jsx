import React, { useState } from 'react';
import ReactCodeInput from 'react-verification-code-input';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const InputVerificationCode = ({ setPage, setValues, values }) => {
    const [entered, setEntered] = useState(false)

    const verify = input => {
        console.log(input)
        setEntered(true)
    }

    const handleChange = () => {
        setPage(5);
        setValues({...values, verificationCode: {
            code :entered
        }}) 
    }

    const returnEnabledButton = () => {
        return <Button 
            type="submit"
            style={{
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
            onClick={() => handleChange()}
        >
            Next
        </Button>
    }

    const returnDisabledButton = () => {
        return <Button style={{
            background: "#cccccc",
            color: '#666666',
            textTransform: 'none',
            width: '100%',
            alignSelf: 'center',
            fontWeight: '500',
            fontSize: '30px',
            boxSizing: 'border-box',
            paddingTop: '10px'
        }}>
            Next
        </Button>
    }

    return <div className="verificationCodeInput" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography style={{
            paddingBottom: '30px',
            paddingLeft: '10px',
            textAlign: 'center',
            marginTop: '46px',
            boxSizing: 'border-box',
            fontSize: '48px'
        }} fontWeight="300">
            Enter Business Code
        </Typography>
        <ReactCodeInput onComplete={verify} fields={4} />
        <br /><br /><br /><br /><br /><br />

        {entered ? returnEnabledButton() : returnDisabledButton()}
        <br /><br />


        <p className='loginText' style={{ marginBottom: '2vh' }}>
            Want to Log in? <Link to='/login' style={{ color: '#0A66C2' }}>Login</Link>
        </p>

    </div>
}

export default InputVerificationCode