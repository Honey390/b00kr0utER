import React, { useEffect } from "react";
import { Link, Outlet ,useNavigate} from "react-router-dom"; //if nested route,need Outlet component which provided by react-router-dom

const DashboardPage = () => {
  const nav=useNavigate();
  useEffect(() => {
    const data=localStorage.getItem("auth");
    if(!data){
      nav("/admin")
    }
  },[]);
  
  return (
    <div className="grid grid-cols-12 h-screen">
    
      <div className=" col-span-2">
        <ul className="text-xl font-semibold text-orange-900">
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/dashboard/user">
            <li>User</li>
          </Link>
          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className=" col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
