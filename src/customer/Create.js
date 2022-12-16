import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Create = () => {
  let history = useHistory();
  const [customer, setCustomer] = useState({
    fname: "",
    lname: "",
    address: "",  
    gender: "",
    email: ""

  });

  const { fname, lname, address, gender, email} = customer;
  const onInputChange = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8000/customer", customer);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-50 mt-5 mx-auto shadow p-5 text-dark">
        <h3 className="text-center mb-4">Create Customer</h3>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="First Name"
              name="fname"
              value={fname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Last Name"
              name="lname"
              value={lname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Gender"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              required
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success btn-block">Save</button>
        </form>
      </div>
    </div>
  );
};
export default Create;
