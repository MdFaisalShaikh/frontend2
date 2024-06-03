import React from 'react'
import classes from'./login.module.css';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button className='my-btn'>Login button</button>
    <button className={classes.btn}>Another button</button>

      </div>
  )
}

export default Login