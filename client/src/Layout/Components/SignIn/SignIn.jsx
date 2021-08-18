import React from 'react'
import "./Signin.css"

export default function Login({setLoginFormData, handleLogin, loginFormData}) {


  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginFormData(prevFormData => (
      {
        ...prevFormData,
        [name]: value
      }
    ))
  }

  return (
    <div className ="signinContainer">
      <h1 className= "signinHeader" >Sign In </h1>
      <form className ="signinForm" onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="">Email</label>
        <input className ="signinInput"
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          value={loginFormData.email}
        />
        <label htmlFor="">Password</label>
        <input className ="signinInput"
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={loginFormData.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
