import { useState } from "react";
import { useNavigate,Link} from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import "./Login.css";




import Urls  from "../../Constants/Urls";
import axios from "axios";

const Login = () => {

  let navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
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
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    params.append('username', values.username);
    params.append('password', values.password);
    let response;
    try {
      response= await axios.post(Urls.LOGIN_URL,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
    } catch (error) {
      console.error(error);
    }
    if(response.status === 200) {
      console.log(response);
      
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      navigate("/");}
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