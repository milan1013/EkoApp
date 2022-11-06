import React, {useState} from 'react';
import "./CreateEventDialog.css"
import FormInput from "../FormInput/FormInput";
import axios from "axios";
import Urls from "../../Constants/Urls.js"

export default function CreateEventDialog() {
  const [values, setValues] = useState({
    eventName: "",
    date: new Date(),
    type: "",
    xp: 0,
    location: "",
    description: ""
  });
  const inputs = [
    {
      id: 1,
      name: "eventName",
      type: "text",
      placeholder: "Event Name",
      label: " Username",
      required: true,
    },
    {
      id: 2,
      name: "date",
      type: "date",
      placeholder: "Date",
      label: "date",
      required: true,
    },
    {
      id: 3,
      name: "type",
      type: "text",
      placeholder: "Type",
      label: "type",
      required: true,
    },
    {
      id: 4,
      name: "xp",
      type: "number",
      placeholder: "Experience",
      label: "xp",
      required: true,
    },
    {
      id: 5,
      name: "location",
      type: "text",
      placeholder: "Location",
      label: " Location",
      required: true,
    },
    {
      id: 6,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "description",
      required: true,
    }];
    const handleSubmit = async (e) => {
      e.preventDefault();
      let accessToken =  localStorage.getItem('accessToken');
      await axios.post(Urls.CREATE_EVENT, 
        inputs,
        {headers: {"accessToken": accessToken}});
    };

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  return (
    <div className="create-event-dialog" style={{backgroundColor: "red"}}>
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
      </form>
  </div>
  )
}
