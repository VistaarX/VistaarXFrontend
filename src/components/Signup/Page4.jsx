import React, { useEffect } from 'react'
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
import TextField from '@mui/material/TextField';
import DistributorForm from './DistributorForm';

const Page4 = ({ marginLeft, width, values, handleChange, setPage, handleClickShowPassword, handleMouseDownPassword, page, userType, userTypes }) => {
    if(userTypes===userTypes[0]) return (
        <React.Fragment>
        </React.Fragment>
    ) 
    else if(userType===userTypes[1]) return <DistributorForm values={values} handleChange={handleChange} setPage={setPage} page={page}
    userType={userType}/>
    else return <>
    </>
}

export default Page4
