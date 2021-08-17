import { login, register, verify, logout } from './services/users'
import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Homepage from './Layout/Homepage/Homepage.jsx';
import Register from './Layout/Components/Register/Register.jsx';
import SignIn from './Layout/Components/SignIn/SignIn.jsx';
import Plants from './Layout/Components/Plants/Plants.jsx';
import EditPlant from './Layout/Components/EditPlant/EditPlants';
import PlantsDetail from './Layout/Components/PlantsDetail/PlantsDetail.jsx';
import NewPlant from './Layout/Components/NewPlant/NewPlant.jsx';


function App() {
  
  const [user, setUser] = useState(null)

  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify()
      setUser(currentUser)
    }
    reverify()
  },[])

  const handleRegister = async (e) => {
    e.preventDefault()
    const newUser = await register(registerFormData)
    setUser(newUser)
    history.push('/foods')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await login(loginFormData)
    setUser(user)
    history.push('/plants')
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    history.push("/login")
  }

  return (
    <div>
      <Homepage user={user} handleLogout={handleLogout}>
        <Route exact path="/Register">
          <Register
            handleRegister={handleRegister}
            setRegisterFormData={setRegisterFormData}
            registerFormData={registerFormData}
          />
        </Route>
        <Route exact path ="/plants"><Plants/></Route>
        <Route exact path ="/plants/:id/edit"><EditPlant/></Route>
        <Route exact path ="/plants/:id"><PlantsDetail/></Route>
        <Route exact path ="/create-plant"><NewPlant user={user} /></Route>
        <Route exact path="/SignIn">
          <SignIn
            handleLogin={handleLogin}
            setLoginFormData={setLoginFormData}
            loginFormData={loginFormData}
          />
        </Route>
      </Homepage>
    </div>
  );
}

export default App;
