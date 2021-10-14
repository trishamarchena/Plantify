import React from 'react'
import "./Register.css"

export default function Register({handleRegister, setRegisterFormData, registerFormData}) {


  const handleChange = (e) => {
    const { name, value } = e.target
    setRegisterFormData(prevFormData => (
      {
        ...prevFormData,
        [name]: value
      }
    ))
  }


  return (
    <div className="registerContainer">
      <h1 className="registerHeader">Register</h1>
      <form className="registerForm"onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="">username</label>
        <input className="registerInput"
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          value={registerFormData.username}
        />

        <label htmlFor="">email</label>
        <input className="registerInput"
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          value={registerFormData.email}
        />
        <label htmlFor="">password</label>
        <input className="registerInput"
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={registerFormData.password}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
  )
}
