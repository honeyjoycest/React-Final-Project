import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
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


  useEffect(() => {
    loadCustomer();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/customer/${id}`, customer);
    history.push("/");
  };

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8000/customer/${id}`);
    setCustomer(result.data);
  };
  return (
    <div className="container">
      <div className="w-50 mt-5 text-dark mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit</h3>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Name"
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
          <button className="btn btn-success">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
