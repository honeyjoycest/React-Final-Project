import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const result = await axios.get("http://localhost:8000/customer");
    setCustomer(result.data.reverse());
  };

  const deleteCustomers = async id => {
    await axios.delete(`http://localhost:8000/customer/${id}`);
    loadCustomers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3 className="text-center">List of Customers</h3>
        </div>
        <table class="table table-striped shadow  text-center">
          <thead class="thead-dark">
            <tr>
            <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer, index) => (
              <tr>
                <td>{customer.fname}</td>
                <td>{customer.lname}</td>
                <td>{customer.address}</td>
                <td>{customer.gender}</td>
                <td>{customer.email}</td>

                <td>
                  <Link class="btn btn-sm btn-info mr-2" to={`/customer/list/${customer.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-sm btn-secondary mr-2"
                    to={`/customer/edit/${customer.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-sm btn-danger"
                    onClick={() => deleteCustomers(customer.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/add">Create New</Link>
        </div>
  );
};

export default Home;
