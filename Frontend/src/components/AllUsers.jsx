import { useEffect, useState } from 'react';
import axios from 'axios';
import Bar from './Bar';
import { NavLink } from 'react-router-dom';

function AllUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/getall")
      .then(response => {
        console.log('API Response:', response.data);
        setData(response.data.getall);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/delete/${id}`)
      .then(response => {
        console.log('Delete Response:', response.data);
        // Remove the deleted item from the state
        setData(data.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error("Error deleting item: ", error);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-6 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>All Users</h1>
      <div className='w-full max-w-4xl'>
        <Bar />
      </div>
      <div className='w-full max-w-4xl mt-6 bg-white shadow-md rounded-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border p-2 text-center'>First Name</th>
                <th className='border p-2 text-center'>Last Name</th>
                <th className='border p-2 text-center'>Email</th>
                <th className='border p-2 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className='even:bg-gray-100'>
                    <td className='border p-2 text-center'>{item.fname || 'N/A'}</td>
                    <td className='border p-2 text-center'>{item.lname || 'N/A'}</td>
                    <td className='border p-2 text-center'>{item.email || 'N/A'}</td>
                    <td className='border p-2 text-center space-x-2'>
                      <NavLink to={`/edit/${item._id}`}>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                          EDIT
                        </button>
                      </NavLink>
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className='border p-2 text-center text-gray-500'>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
