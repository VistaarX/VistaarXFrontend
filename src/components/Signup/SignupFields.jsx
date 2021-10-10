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
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';


const SignupFields = ({ marginLeft, width }) => {
  const [page, setPage] = React.useState(1)

  const [values, setValues] = React.useState({
    gender: 'Male',
    password: '',
    showPassword: false,
  });

  const wantToOptions = ['Join an Existing Business', 'Create Business Profile']

  const [wantTo, setWantTo] = React.useState(wantToOptions[1])

  const userTypes = ['Manufacturer', 'Distributor', 'Retailer']

  const [userType, setUserType] = React.useState(userTypes[0])

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

  const returnPage = page => {
    if (page === 1) return (
      <Page1 values={values} setPage={setPage} handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} page={page} />
    )
    else if (page === 2) return (
      <Page2 values={values} setPage={setPage} handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} page={page} 
        wantToOptions={wantToOptions} wantTo={wantTo} setWantTo={setWantTo}/>
    )
    else if (page === 3) return (
      <Page3 values={values} setPage={setPage} handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} 
        page={page} userTypes={userTypes} setUserType={setUserType} wantTo={wantTo} wantToOptions={wantToOptions} />
    )
    else if (page === 4) return (
      <Page4 values={values} setPage={setPage} handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} 
        page={page} userTypes={userTypes} setUserType={setUserType}/>
    )
  }

  return (
    <form className='signupFields'>
      {returnPage(page)}
    </form>
  )
}

export default SignupFields
