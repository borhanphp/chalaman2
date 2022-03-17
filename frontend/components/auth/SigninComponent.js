import React from 'react'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Styles from './login.module.css'
import {authenticate, signin, isAuth} from '../../actions/auth'

const SigninComponent = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  });

  const {email, password, error, message, showFrom} = values;

  useEffect(() => {
     isAuth() && Router.push('/');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //console.table({name, email, password, cpassword, error, message, showFrom});
    setValues({...values, loading: true, error: false});
    const user = {email, password};


    signin(user).then(data => {
      if(error){
        setValues({...values, error: error, loading: false });
      } else {
        //token save
        //
        authenticate(data, () => {
          if(isAuth() && isAuth().role === 1){
              Router.push(`/admin`);
          }else{
              Router.push('/user');
          }    
        });
       
      };
      
    });
  };

  const handleChange = name => (e) => {
    setValues({...values, error: false, [name]: e.target.value });
  };

  // const showLoading = () => (loading ? <div  className="alert alert-info">Loading...</div> : '');
  // const showError = () => (error ? <div  className="alert alert-danger">{error}</div> : '');
  // const showMessage = () => (message ? <div  className="alert alert-info">{message}</div> : '');


  const loginForm = () => {
    return (
        <>
        <main className={Styles.main}>
          <div className={Styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="email" value={email} placeholder='Email Address' onChange={handleChange('email')}></input>
              <input type="password" name="password" value={password} placeholder='Password' onChange={handleChange('password')}></input>
              <button>Login</button>
            </form>
          </div>
        </main>
      </>
    );
  };


  return (
  <>
  {/* {showError()} */}
  {/* {showLoading()}
  {showMessage()} */}
  {loginForm()}
  </>
  );
}

export default SigninComponent