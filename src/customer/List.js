import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const List = () => {
  const [customer, setCustomer] = useState({
    fname: "",
    lname: "",
    address: "",  
    gender: "",
    email: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadCustomer();
  }, []);
  const loadCustomer = async () => {
    const res = await axios.get(`http://localhost:8000/customer/${id}`);
    setCustomer(res.data);
  };
  return (
    <div className="container py-4">   
      <table className="table shadow table-striped">
          <thead className="bg-dark text-light">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>{customer.fname}</td>
                <td>{customer.lname}</td>
                <td>{customer.address}</td>
                <td>{customer.gender}</td>
                <td>{customer.email}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary mb-2" to="/">
        back
      </Link>
    </div>
  );
};

export default List;
