// components/header/Header.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLoginDetailsSuccess } from '../../redux/action';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(fetchLoginDetailsSuccess({})); // Action to clear login response
  };

  const loginResponse = useSelector((state) => state.loginReducer.loginResponse);

  useEffect(()=>{
   console.log(loginResponse);

   if(loginResponse && Object.keys(loginResponse).length === 0)
   {
    navigate('/login');
   }
  },[loginResponse])



  return (
    <header className="bg-light text-primary-foreground p-2 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FaHome className="text-primary-500" />
          <span className="text-lg font-semibold">SyncTech</span>
        </Link>
        { Object.keys(loginResponse).length !==0 && (<button
          onClick={handleLogout}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full"
          aria-label="Logout"
        >
          <FaSignOutAlt />
        </button>)}
      </div>
    </header>
  );
};

export default Header;
