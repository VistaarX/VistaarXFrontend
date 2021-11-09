import React, { useEffect } from 'react'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import DistributorForm from './DistributorForm';
import ManufacturerForm from './ManufacturerForm';
import RetailerForm from './RetailerForm';


const Page4 = ({ marginLeft, width, values, setValues, setPage, handleClickShowPassword, handleMouseDownPassword, page, 
    userType, userTypes }) => {

    const heading = () => (<Typography style={{
            paddingBottom: '30px',
            paddingLeft: '10px',
            textAlign: 'center',
            marginTop: '46px',
            boxSizing: 'border-box',
            fontSize: '48px'
        }} fontWeight="800">
            <span style={{ fontWeight: '800', fontSize: '30px', display: 'inline-block' }}>Register as </span>&#160;{userType}
        </Typography>)
    
    if(userType===userTypes[0]) return <ManufacturerForm values={values} setPage={setPage} 
    page={page} heading={heading} userType={userType} setValues={setValues}/>

    else if(userType===userTypes[1]) return <DistributorForm values={values} setPage={setPage} 
    page={page} heading={heading} userType={userType} setValues={setValues}/>

    else if(userType===userTypes[2]) return <RetailerForm values={values} setPage={setPage} 
    page={page} heading={heading} userType={userType} setValues={setValues}/>

    else return <>
    </>
}

export default Page4
