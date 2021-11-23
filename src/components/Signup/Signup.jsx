import React from 'react'
import SignupFields from './SignupFields'
import { Button } from '@mui/material'
import { Link, Redirect } from 'react-router-dom'
import JoinExisting from './JoinExisting'
import axios from 'axios'
import { handleLogin, handleSignup } from '../../Api/auth'
import '../../stylesheets/Signup.css'
import { createManufacturer, createRetailer, createDistributor, joinProfile } from '../../Api/profile/profile_routes'
import {addProduct} from "../../Api/profile/product_routes"

const Signup = () => {
    const userTypes = ['Manufacturer', 'Distributor', 'Retailer']
    const wantToOptions = ['Join an Existing Business', 'Create Business Profile']

    const [page, setPage] = React.useState(1)
    const [wantTo, setWantTo] = React.useState(wantToOptions[1])
    const [userType, setUserType] = React.useState(userTypes[1])

    const initialValues = {
      signup_values:{
        'name': '',
        'email': '',
        'password': '',
        'phone_num': '',
      },
      gender: 'Male',
      showPassword: false,
      wantTo: wantToOptions[1],
      verificationCode: {
        'code':''
      },
      userType: userType,
      page4: {
        ManufacturerForm: {
          'name': '',
          'product_category': '',
          'gst': '',
          'turnover': '',
          'number': '',
          'email': '',
          'year':'',
          'trademark': '',
          'legal_status': '',
          'main_markets': '',
          'address': '',
          'about': '',
          'logo':'logo image url here'
        }, DistributorForm: {
          'name': '',
          'ownerName': '',
          'product_category': '',
          'gst': '',
          'turnover': '',
          'number': '',
          'email': '',
          'legal_status': '',
          'area_of_supply': '',
          'address': '',
          'about': '',
          'year':'',
          'logo':'logo image url here'
        }, RetailerForm: {
          'name': '',
          'gst': '',
          'year':'',
          'turnover': '',
          'logo':'logo image url here',
          'product_category': '',
          'number': '',
          'email': '',
          'address': '',
          'about': '',
          'legal_status': '',
          'main_markets': '',
          'trademark': '',
        }
      },
      page5: {
        'product_name': '',
        'price': '',
        'image': 'image_url_here'
      }
    }

    const [values, setValues] = React.useState(initialValues)

    React.useEffect(()=>{     
      setValues({...values, "wantTo": wantTo, "userType":userType})
    }, [wantTo, userType])
  
    const handleSubmitProfileForm=async ()=>{
      var res;
      if(userType==="Manufacturer"){
        res=await createManufacturer(values.page4.ManufacturerForm);
      }
      else if(userType==="Retailer"){
        res=await createRetailer(values.page4.RetailerForm);
      }
      else if(userType==="Distributor"){
        res=await createDistributor(values.page4.DistributorForm);
      }
      else{
        console.log("No profile selected to proceed further.")
      }
      if(res!==null){
        console.log(`${userType} detailes submitted`);
        setPage(page+1)
      }
    }

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
        setValues(initialValues)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(values.verificationCode)
        if(page==3){
          if(wantTo==wantToOptions[0]){
              let res=await joinProfile(values.verificationCode);
              if(res!==null){
                console.log("Joined a profile with code "+values.verificationCode.code);
                setPage(5);
                return;
              }
              else{
                console.log(res)
              }
          }
        }
        if(page<5){
          if(page==1){
            let res_value=values.signup_values;
            console.log(res_value)
            let res=await handleSignup(res_value)
            if(res!==null){
              console.log("Successfully signed up")
              delete res_value['name'];
              delete res_value['phone_num'];
              let log_res=await handleLogin(res_value);
              if(log_res!==null){
                console.log("Logged in successfully.")
                setPage(page+1)
              }
            }
          }
          if(page==4){
            await handleSubmitProfileForm();
          }
          if(page==2 || page==3){
            setPage(page+1)
          }
        }
        else if (page===5) {
          let res=await addProduct(values.page5);
          if(res!==null){
            console.log("Product details added");
            setPage(1)
            resetValues()
          }
        }
      }

    if(page==1 && localStorage.getItem("JWT")!==null){
      return <Redirect to="/user/employee"></Redirect>
    }
    if (window.innerWidth<=1024) 
    return (
        <div className='signupBox'>
            <SignupFields marginLeft='5%' width='90%' height='100%' userTypes={userTypes} onSubmit={onSubmit} values={values} 
            setValues={setValues} page={page} setPage={setPage} handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword} wantToOptions={wantToOptions} setWantTo={setWantTo} wantTo={wantTo}
            userType={userType} setUserType={setUserType}
            handleSubmitProfileForm={handleSubmitProfileForm}/>
        </div>
    )

    else return (
        <div className='signupBox'>
            <SignupFields marginLeft='5%' width='90%' height='100%' userTypes={userTypes} onSubmit={onSubmit} values={values} 
            setValues={setValues} page={page} setPage={setPage} handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword} wantToOptions={wantToOptions} setWantTo={setWantTo} wantTo={wantTo}
            userType={userType} setUserType={setUserType} 
            handleSubmitProfileForm={handleSubmitProfileForm}/>
            <br/>
        </div>
    )
}

export default Signup
