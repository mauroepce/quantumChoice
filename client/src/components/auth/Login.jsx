import { Link } from "react-router-dom";
import { Box, Text } from "../base";
import { AuthBtn, AuthInput, AuthTitle } from "../base/auth";
import clsx from 'clsx';
import { useContext, useState } from "react";
import ApiContext from "../../reducer-context/apiContext";
import validate from "../../utils/validate"

function Login() {

  const [user, setUser] = useState({email: "", password: ""});
  const [errors, setErrors] = useState({email: "", password: ""});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const { dispatch } = useContext(ApiContext);


  const handlerEmail = (e) => {
    const email = e.target.value;
    setUser({...user, email });
    if(email === "") {
      setErrors({...errors, email: ""});
    } else {
      setErrors({...errors, email: validate.validateEmail(email) ? 
        "" : "Email is not valid"});
    }
  };

  const handlerPassword = (e) => {
    const password = e.target.value;
    setUser({...user, password});
    
  };

  const handlerClick = () => {
    if(errors.email === "" && errors.password === "" && user.email !== "" && user.password !== "") {
      signUp(dispatch, user)
      setUser({email: "", password: ""});
      setErrors({email:"", password: ""});
    } else {
      setAttemptedSubmit(true);
    }
  }
  
    return (
      <Box  className='w-full h-full flex justify-start items-center flex-col'>  

      <AuthTitle className="h-auto xs:mt-[60px] mt-[150px] mb-14">Sign In</AuthTitle>

      {/* Auth Container */}
      <Box className="w-[85%] h-full flex flex-col gap-4 items-center">
        <AuthInput 
          placeholder={"Email Address"} 
          type="text" 
          onChange={handlerEmail}
          value={user.email}
          />
          {/* If the user wants to submit with invalid email */}
          {
          attemptedSubmit && errors.email && user.email !== "" &&
          <div className="py-1 px-1 w-full text-red-500 text-sm mt-[-1rem] ">
          {errors.email}
          </div>
          }
          {/* If the user wants to submit without entering an email */}
          {
          attemptedSubmit && user.email === "" && 
          <div className="py-1 px-1 w-full text-red-500 text-sm mt-[-1rem] ">
          Please enter an email address.
          </div>
          }
        <AuthInput 
          type="password"
          placeholder={"Password"} 
          onChange={handlerPassword}
          value={user.password}
          />
          {/* If the user password is empty*/}
      
          {
          attemptedSubmit && user.password === "" && 
          <div className="w-full px-1 py-1 text-red-500 text-sm mt-[-1rem] ">
            Please enter a password.
          </div>
          }

        {/* Button Register */}
        <AuthBtn className={"mt-5"} text="Sign In" onClick={handlerClick}/>

        <Text className="font-light mt-1">Don't have an account? 
          <Link to="/register" className="ml-4 font-semibold text-[#0069d9]">Sign Up</Link> 
        </Text>

         
          <Link to="/forgotPass" className="font-semibold text-[14px] text-[#0069d9]">I forgot my password</Link> 
        
        
        {/* Line "or register with" */}
        <Box className="relative w-full flex justify-center items-center mt-12">
          <Box className={clsx('absolute w-full h-px bg-white', 
                        'before:content-[\'\'] before:block before:w-full before:h-px before:bg-white before:absolute before:right-0 ',
                        'after:content-[\'\'] after:block after:w-full after:h-px after:bg-white after:absolute after:left-0 ')}>
                          
                        </Box>
          <Text className="relative z-10 bg-black text-white px-3 text-[16px]">Or sign in with</Text>
        </Box>

      </Box>


    </Box>
    )
  }
  
  export default Login;