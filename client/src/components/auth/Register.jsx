import { Box, Text } from "../base";
import { AuthBtn, AuthInput, AuthTitle } from "../base/auth";
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useContext, useState } from "react";
import ApiContext from "../../reducer-context/apiContext";
import { signUp } from "../../actions/actions";
import validate from "../../utils/validate"


function Register() {

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
    if(password === "") {
      setErrors({...errors, password: ""});
    } else {
      setErrors({...errors, password: validate.validatePassword(password) ? 
        "" : "Password needs 8+ chars, 1+ uppercase, lowercase, number and special char(!@#$)."
      });
    }
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

      <AuthTitle className="h-auto xs:mt-[60px] mt-[150px] mb-14">Sign Up</AuthTitle>

      {/* Auth Container */}
      <Box className="w-[85%] h-full flex flex-col gap-4 items-center">
        <AuthInput 
          placeholder={"Email Address"} 
          type="text"
          onChange={handlerEmail} 
          value={user.email}
          />
          {/* If there is an error on the email */}
          {
          attemptedSubmit && errors.email && 
          <div className="py-1 px-1 w-full text-red-500 text-sm mt-[-1rem] ">
          {errors.email}
          </div>
          }
          {/* If the user wants to submit without enter an email */}
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
          {
          attemptedSubmit && errors.password && 
          <div className="w-full px-1 py-1 text-red-500 text-sm mt-[-1rem] ">
            {errors.password}
          </div>
          }
          {
          attemptedSubmit && user.password === "" && 
          <div className="w-full px-1 py-1 text-red-500 text-sm mt-[-1rem] ">
            Please enter a password.
          </div>
          }

        {/* Button Register */}
        <AuthBtn 
        className={"mt-5"} 
        text="Sign Up" 
        onClick={handlerClick}
        />

        <Text className="font-light mt-1">Already have an account? 
          <Link to="/login" className="ml-4 font-semibold text-[#0069d9]">Sign In</Link> 
        </Text>
        
        {/* Line "or register with" */}
        <Box className="relative w-full flex justify-center items-center mt-12">
          <Box className={clsx('absolute w-full h-px bg-white', 
                        'before:content-[\'\'] before:block before:w-full before:h-px before:bg-white before:absolute before:right-0 ',
                        'after:content-[\'\'] after:block after:w-full after:h-px after:bg-white after:absolute after:left-0 ')}>

                        </Box>
          <Text className="relative z-10 bg-black text-white px-3 text-[16px]">
            Or register with
          </Text>
        </Box>

      </Box>


    </Box>
  )
}

export default Register;