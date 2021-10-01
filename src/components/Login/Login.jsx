import React from 'react'
import "../../stylesheets/Login.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//import styled from "styled-components"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


 
   
const Login = () => {
    return (
        <div className="loginbox">
            <h1>Login</h1>
            <form className="form">
                <div className ="form-inner">
                   
               
                   
                    <input className="email" type="email"   name="email" placeholder="Email"></input>
                    
                    <input type="password" name="password" placeholder="Password"></input>
                    


                    
                    <a href="">Forgot password?</a>
                    <input class="btn" type="button" value="login"></input>

                </div>

                <div className="form-outter">
                <a href="">Don't have an Account</a>
                <input class="btn" type="button" value="Create New Account"></input>
                </div>

                
            </form>
        </div>

       
    )
}



export default Login

