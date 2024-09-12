import React, { useState } from 'react';
import axios from 'axios';
import Bar from './Bar';

const AddUser = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mern-crud-app-api-five.vercel.app/api/create', formData)
      .then(response => {
        console.log("Form Data Submitted:", formData);
        console.log("Response from server:", response.data);
        // Reset form data
        setFormData({
          fname: "",
          lname: "",
          email: "",
          password: ""
        });
      })
      .catch(error => {
        console.error("Error submitting data: ", error);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-6 bg-gray-100'>
      <div className='w-[200%] max-w-5xl p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-4 text-gray-700'>Add User Form</h1>
        <Bar />
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='text-gray-600 mt-4 mb-1' htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder='Enter First Name'
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600 mb-1' htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder='Enter Last Name'
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600 mb-1' htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Email'
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600 mb-1' htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter Password'
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button
            type="submit"
            className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
    