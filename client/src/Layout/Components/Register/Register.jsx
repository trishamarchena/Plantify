import React from 'react'

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
    <div>
      <h1>Register</h1>
      <div className = "register">
      <form onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="">username</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          value={registerFormData.username}
        />
        <label htmlFor="">email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          value={registerFormData.email}
        />
        <label htmlFor="">password</label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={registerFormData.password}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}
