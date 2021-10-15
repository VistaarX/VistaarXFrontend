import { Typography } from '@mui/material'
import React from 'react'
import SignupFields from './SignupFields'
import { Button } from '@mui/material'
import { Link, Redirect } from 'react-router-dom'
import JoinExisting from './JoinExisting'

import '../../stylesheets/Signup.css'

const Signup = () => {
    const userTypes = ['Manufacturer', 'Distributor', 'Retailer']
    const wantToOptions = ['Join an Existing Business', 'Create Business Profile']

    const [page, setPage] = React.useState(1)
    const [wantTo, setWantTo] = React.useState(wantToOptions[1])
    const [userType, setUserType] = React.useState(userTypes[1])
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: 'Male',
        showPassword: false,
        verificationCode: '',
        wantTo: wantToOptions[1],
        userType: userType,
        page4: [{
            formName: 'ManufacturerForm'
        }, {
            formName: 'DistributorForm'
        }, {
            formName: 'RetailerForm'
        }]
      });

    React.useEffect(()=>{
      setValues({...values, "wantTo": wantTo})
    }, [wantTo])
  
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

    const resetValues = () => {
        setValues({
            name: '',
            email: '',
            phone: '',
            password: '',
            gender: 'Male',
            showPassword: false,
            verificationCode: '',
            wantTo: wantToOptions[1],
            userType: userType,
            page4: [{
                formName: 'ManufacturerForm'
            }, {
                formName: 'DistributorForm'
            }, {
                formName: 'RetailerForm'
            }]
          })
    }

    const onSubmit = event => {
        event.preventDefault()
        if(page<5)
          setPage(page+1)
        else if (page===5) {
            setPage(1)
            resetValues()
            return <Redirect to='/add_post'></Redirect>
        }
      }

    if (window.innerWidth<=1024) 
    return (
        <div className='signupBox'>

            <SignupFields marginLeft='5%' width='90%' height='100%' userTypes={userTypes} onSubmit={onSubmit} values={values} 
            setValues={setValues} page={page} setPage={setPage} handleChange={handleChange} handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword} wantToOptions={wantToOptions} setWantTo={setWantTo} wantTo={wantTo}
            userType={userType} setUserType={setUserType} userTypes={userTypes} height='100vh'/>
        </div>
    )

    else return (
        <div className='signupBox'>
            <SignupFields marginLeft='5%' width='90%' height='100%' userTypes={userTypes} onSubmit={onSubmit} values={values} 
            setValues={setValues} page={page} setPage={setPage} handleChange={handleChange} handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword} wantToOptions={wantToOptions} setWantTo={setWantTo} wantTo={wantTo}
            userType={userType} setUserType={setUserType} userTypes={userTypes} />
            <br/>
        </div>
    )
}

export default Signup
