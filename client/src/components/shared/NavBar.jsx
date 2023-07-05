import React from 'react'
import { Box, Img, Text } from '../base'
import Logo from "../../assets/logo_white.png"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Box className="px-6 py-2 flex justify-between items-center">
        <Box className="flex text-xl w-full md:flex items-center justify-between h-14">

            {/* Logo QuantumChoice */}
            <Link to="/">
              <Img 
              src={Logo}
              alt="Logo"
              className={"w-[200px] "}
              />
            </Link>

            {/* Options */}
            <ul className='hidden md:flex w-[300px] items-center justify-between'>
              <li><Text children={"Send feedback"} /></li>
              <li className='flex items-center'>
                <Text className='px-2' children={"Sign In"} />
              </li>
            </ul>
        </Box>
    </Box>
  )
}

export default NavBar