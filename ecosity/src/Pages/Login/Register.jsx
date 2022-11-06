import { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import "./Register.css";
import {Outlet,Link} from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "First Name",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 4-12 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{4,12}$",
      required: true,
    },
    {
      id: 2,
      name: "Last Name",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 5-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
      id: 3,
      name: "Username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 5-16 characters and shouldn't include any special character!",
      label: " Username",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
    <div className="register-app">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="user-button">Submit</button>
        <div className="login-text"><Link to="/login">Already have an account? Log in</Link></div>
      </form>
    </div>
  );
};

export default Register;
