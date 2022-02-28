import React,{Component, useEffect, useState} from 'react';
import "./styles.css";
import "./util.css"; 
import axios from 'axios';
import { Button } from 'react-bootstrap'; 
export default function Home(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect (() => {

  if (localStorage.getItem( 'user-info')){
    }
    },[])

    




  async function validateForm(){
    
    console.log(email);
    console.log(password);
   const result= await axios.post("https://2202d591-0df9-45ab-b72b-9bdef9c554c3.mock.pstmn.io/login" ,
   {"password":password,"email": email})

  console.log(result.data.token);
  localStorage.setItem("TOKEN",result.data.token)
  
  console.log(localStorage.getItem("TOKEN"))
  
  }
  function handleSubmit(event){
    event.preventDefault(); 
  
  }
     return(     
         <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
              <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
                <span className="login100-form-title p-b-32">
                  Account Login
                </span>
                <span className="txt1 p-b-11">
                  Username
                </span>
                <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                  <input className="input100" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <span className="focus-input100" />
                </div>
                <span className="txt1 p-b-11">
                  Password
                </span>
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                  <span className="btn-show-pass">
                    <i className="fa fa-eye" />
                  </span>
                  <input className="input100" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <span className="focus-input100"/>
                </div>
                <div className="flex-sb-m w-full p-b-48">
                  <div className="contact100-form-checkbox">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="txt3">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button type='button' className='btn btn-primary' onClick={()=>{validateForm()}}>
                    Login
                  </button>
                  </div>
                 
        <div>
                 
      

                </div>
              </form>
        <div id="dropDownSelect1" />
      </div>
      </div>
      </div>
 
    
        );
        }
       
       