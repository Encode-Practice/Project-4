import React from 'react';
import { Outlet, NavLink } from "react-router-dom";






// Navigation component
const Tab = () => {

 const classNameFunc = ({ isActive }: { isActive:Boolean}) => (isActive ? "nav-link active" : "nav-link");
  return (
      <div className="container text-center">
         <ul className="nav nav-tabs mt-4 pt-4">
         
        <li className="nav-item">
            <NavLink   
            className={classNameFunc}  to="/images/upload ">Add images</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink 
        className={classNameFunc}  to="/wallet">TG Wallet</NavLink>
        </li>
        <li className="nav-item">
            <NavLink   
            className={classNameFunc}  to="/ ">Back to home</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink 
        className={classNameFunc}  to="#">Image upload</NavLink>
        </li> */}
      </ul>
        <Outlet />
      </div>
        
  )
}

export default Tab;