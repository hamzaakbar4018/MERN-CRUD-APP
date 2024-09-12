import React from 'react';
import { NavLink } from 'react-router-dom';

const Bar = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <ul className='flex mt-3 gap-5'>
        <li className=' bg-slate-800 text-white rounded-xl p-2 font-bold'>
          <NavLink to="/alluser">All Users</NavLink>
        </li>
        <li className=' bg-slate-800 text-white rounded-xl p-2 font-bold'>
          <NavLink to="/adduser">Add User</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Bar;
