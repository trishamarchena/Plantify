import React from 'react'

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
    <div>
      <h1>Sign In </h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="">email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          value={loginFormData.email}
        />
        <label htmlFor="">password</label>
        <input
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
