import { Link } from "react-router-dom";
import { Box, Text } from "../base";
import { AuthBtn, AuthInput, AuthTitle } from "../base/auth";
import clsx from 'clsx';

function ForgotPass() {

  
    return (
      <Box  className='w-full h-full flex justify-start items-center flex-col'>  

      <AuthTitle className="h-auto xs:mt-[60px] mt-[150px] mb-14">Reset my password</AuthTitle>

      {/* Auth Container */}
      <Box className="w-[85%] h-full flex flex-col gap-4 items-center">

        {/* Reset password instruction */}
        <Text className="text-center">
        Enter your email address and we will send you instructions to reset your password.
        </Text>

        {/* Email input password reset */}
        <AuthInput 
          placeholder={"Email Address"} 
          type="text" 
          />
        

        {/* Button Register */}
        <AuthBtn className={"mt-5"} text="Reset password" />
         
          <Link to="/login" className="font-semibold text-[14px] text-[#0069d9]">Back to Sign In</Link> 
        

      </Box>


    </Box>
    )
  }
  
  export default ForgotPass;