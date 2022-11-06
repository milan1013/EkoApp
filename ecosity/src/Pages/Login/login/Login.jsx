import { useState } from "react";
import FormInput from "../../../Components/FormInput/FormInput";
import "./Login.css";
import {Outlet,Link} from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Username",
      label: " Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-app">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="user-button">Submit</button>
        <div className="login-text"><Link to="/register">Don't have an account?Register</Link></div>
      </form>
    </div>
  );
};

export default Login;