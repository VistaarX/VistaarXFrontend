import React, { useEffect } from 'react'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import DistributorForm from './DistributorForm';
import ManufacturerForm from './ManufacturerForm';
import RetailerForm from './RetailerForm';


const Page4 = ({ marginLeft, width, values, handleChange, setPage, handleClickShowPassword, handleMouseDownPassword, page, 
    userType, userTypes }) => {

    const heading = () => <Typography style={{
            paddingBottom: '30px',
            paddingLeft: '10px',
            textAlign: 'center',
            marginTop: '46px',
            boxSizing: 'border-box',
            fontSize: '48px'
        }} fontWeight="800">
            <Typography style={{ fontWeight: '500', fontSize: '30px', display: 'inline-block' }}>Register as </Typography>&#160;{userType}
        </Typography>
    
    if(userType===userTypes[0]) return <ManufacturerForm values={values} handleChange={handleChange} setPage={setPage} 
    page={page} heading={heading} userType={userType}/>

    else if(userType===userTypes[1]) return <DistributorForm values={values} handleChange={handleChange} setPage={setPage} 
    page={page} heading={heading} userType={userType}/>

    else if(userType===userTypes[2]) return <RetailerForm values={values} handleChange={handleChange} setPage={setPage} 
    page={page} heading={heading} userType={userType}/>

    else return <>
    </>
}

export default Page4