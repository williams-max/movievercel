import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "" 
   
  });

  const { name, username, email } = user;
  const onInputChange = e => {
      console.log(e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
   
    e.preventDefault();
   await axios.post("http://localhost:3003/users", user);
    //history.push("/");
   history('/');
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
        
         
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;