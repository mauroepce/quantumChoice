import { Box } from "../base";
import { AuthBtn, AuthInput, AuthTitle } from "../base/auth";



function Register() {

  
  return (
    <Box  className='w-full h-full flex justify-start items-center flex-col'>  

      <AuthTitle className="h-auto mt-[140px] mb-12">SignUp</AuthTitle>

      {/* Auth Container */}
      <Box className="w-[85%] h-full flex flex-col gap-4">
      <AuthInput 
        placeholder={"Email Address"} 
        type="text" 
        />
      <AuthInput 
        type="password"
        placeholder={"Password"} 
        />
      <AuthInput 
        type="password"
        placeholder={"Confirm Password"} 
        />

      <AuthBtn className={"mt-5"} text="Register" />
      </Box>
    </Box>
  )
}

export default Register;