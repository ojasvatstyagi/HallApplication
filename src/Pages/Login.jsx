import React, { useState} from "react";
import {useNavigate,Navigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { login, loading, loginFailed } from "../Store/userslice";
import { useDispatch, useSelector } from "react-redux";
import LoginUser from "../Services/LoginUser";


const LoginPage = () => {
  const {isLoading,userData,isLoggedIn} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const focusedStyle = {
    outline: "2px solid #D00846",
    outlineOffset: "2px",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = async(e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Please enter the credentails!");
      return;
    }
    dispatch(loading());
    const res = await LoginUser(credentials);
    if(res.valid){
        dispatch(login(res));
        navigate(`/${res.role}/portal`,{replace:true});
    }
    else{
        dispatch(loginFailed());
        alert("Invalid credentials");
        setCredentials({email:"",password:""});
    }
        
  };

  return (
    <>
    {isLoggedIn?<Navigate to={`/${userData.role}/portal`} replace/> :
     <section className={`h-screen relative overflow-hidden ${isLoading?"pointer-events-none":""}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://webfiles.amrita.edu/2019/11/amrita-vishwa-vidyapeetham-bengaluru-video-banner.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container mx-auto py-5 h-full relative z-10">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
              <div className="flex flex-col items-center mb-5 pb-1">
                <i className="fas fa-cubes fa-2x mb-3 text-[#ff6219]"></i>
                <span className="text-4xl font-bold text-black text-center">
                  Amrita University
                </span>
              </div>

              <h5 className="font-normal mb-4 pb-3 tracking-wide text-black text-center">
                Sign into your account
              </h5>

              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    id="form2Example17"
                    className="form-input w-full border rounded-lg p-2"
                    placeholder="Email address"
                    style={{
                      color: "black",
                      ...(emailFocus ? focusedStyle : {}),
                    }}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 relative">
                  {" "}
                  <input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    id="form2Example27"
                    className="form-input w-full border rounded-lg p-2 pr-10" // Added padding right for icon
                    placeholder="Password"
                    style={{
                      color: "black",
                      ...(passwordFocus ? focusedStyle : {}),
                    }}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility} // Toggle password visibility
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash style={{ color: "#D00846" }} /> // Set color for eye slash icon
                    ) : (
                      <FaEye style={{ color: "#D00846" }} /> // Set color for eye icon
                    )}
                  </button>
                </div>

                <div className="mb-4">
                  <button
                    className="bg-[#D00846] text-white rounded-lg py-2 px-4 w-full shadow-md hover:bg-[#a0073a]"
                    type="submit"
                    onClick={handleClick}
                  >
                    Login
                  </button>
                </div>

                <a
                  className="text-sm text-gray-600 text-center block mb-3"
                  href="#!"
                >
                  Forgot password?
                </a>
                <p className="mt-5 text-gray-700 text-center">
                  Don't have an account?
                  <a href="#!" className="text-blue-600">
                    {" "}
                    Register here
                  </a>
                </p>
                <div className="text-sm text-gray-600 text-center">
                  <a href="#!">Terms of use.</a>
                  <br />
                  <a href="#!">Privacy policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    }
    </>
  );
};

export default LoginPage;
