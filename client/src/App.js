import { login, register, verify, logout } from "./services/users";
import { useState, useEffect } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import Homepage from "./Layout/Homepage/Homepage.jsx";
import Register from "./Layout/Components/Register/Register.jsx";
import SignIn from "./Layout/Components/SignIn/SignIn.jsx";
import Plants from "./Layout/Components/Plants/Plants.jsx";
import EditPlant from "./Layout/Components/EditPlant/EditPlants";
import PlantsDetail from "./Layout/Components/PlantsDetail/PlantsDetail.jsx";
import NewPlant from "./Layout/Components/NewPlant/NewPlant.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  const [user, setUser] = useState(null);

  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify();
      setUser(currentUser);
    };
    reverify();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = await register(registerFormData);
    setUser(newUser);
    history.push("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(loginFormData);
    setUser(user);
    history.push("/plants");
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push("/");
  };

  return (
      <Switch>
        <Layout user ={user} handleLogout={handleLogout}>
    <div className="navbar">
        <Route exact path="/">
          <Homepage user={user} handleLogout={handleLogout} />
        </Route>
        <Route exact path="/Register">
          <Register
            handleRegister={handleRegister}
            setRegisterFormData={setRegisterFormData}
            registerFormData={registerFormData}
          />
        </Route>
        <Route exact path="/plants">
          <Plants />
        </Route>
        <Route exact path="/plants/:id/edit">
          <EditPlant />
        </Route>
        <Route exact path="/plants/:id">
          <PlantsDetail />
        </Route>
        <Route exact path="/create-plant">
          <NewPlant user={user} />
        </Route>
        <Route exact path="/login">
          <SignIn
            handleLogin={handleLogin}
            setLoginFormData={setLoginFormData}
            loginFormData={loginFormData}
          />
        </Route>
    </div>
    </Layout>
      </Switch>
  );
}

export default App;
