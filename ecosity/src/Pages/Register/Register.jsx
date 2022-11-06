import { useState, useEffect } from "react";
import {Outlet,Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

import Urls from "../../Constants/Urls"
import FormInput from "../../Components/FormInput/FormInput";
import "./Register.css";

const Register = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 4-12 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{4,12}$",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 5-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 5-16 characters and shouldn't include any special character!",
      label: " Username",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
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
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,

    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("NEsto: ", values);
    delete values.confirmPassword;
    console.log("NEsto: ", values);
    let response;
    try {
      response = await axios.post(Urls.REGISTER_URL , values);
    } catch (error) {
      console.error(error);
    }
      console.log(response.status);
      if(response.status === 201)
        navigate("/login");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if(isRegistred)
  //     retrun ;
  // }, [isRegistred])

  return (
    <div className="register-app">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        {inputs.map((input, index) => (
          <FormInput
            key={index}
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
