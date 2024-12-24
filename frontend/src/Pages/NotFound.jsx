import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();
  const {isLoggedIn,userData} = useSelector((state)=>state.user);
  const handleClick = ()=>{
    if(isLoggedIn)
        navigate(`/${userData.role}/portal`,{replace:true});
    else
        navigate("/")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-lg text-center mb-6 px-4 md:px-0">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-md transition duration-300"
      >
        Go {!isLoggedIn?"To Login Page":"Back Home"}
      </button>
    </div>
  );
};

export default NotFound;
