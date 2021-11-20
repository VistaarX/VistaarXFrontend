import React from 'react';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import Page5 from './Page5.jsx';


const SignupFields = ({ marginLeft, width, height, userTypes, values, setValues, onSubmit, page, setPage, wantTo, wantToOptions, setWantTo, handleClickShowPassword, handleMouseDownPassword, setUserType, userType }) => {

  const returnPage = page => {
    if (page === 1) return (
      <Page1 values={values} setValues={setValues}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} page={page} />
    )
    else if (page === 2) return (
      <Page2 values={values}
        handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} page={page} 
        wantToOptions={wantToOptions} wantTo={wantTo} setWantTo={setWantTo} />
    )
    else if (page === 3) return (
      <Page3 values={values} page={page} setValues={setValues}
        setPage={setPage} userTypes={userTypes} setUserType={setUserType} wantTo={wantTo} wantToOptions={wantToOptions} userType={userType} onSubmit={onSubmit}/>
    )
    else if (page === 4) return (
      <Page4 values={values}
        page={page} userTypes={userTypes} setUserType={setUserType} userType={userType} setValues={setValues}/>
    )
    else if (page === 5) return (
      <Page5 values={values} setValues={setValues}/>
    )
  }

  return (
    <form className='signupFields' onSubmit={onSubmit} style={{height: height}}>
      {returnPage(page)}
    </form>
  )
}

export default SignupFields
