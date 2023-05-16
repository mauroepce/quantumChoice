import React from 'react'
import { Box, Text } from './base'

function NavBar() {
  return (
    <Box className="px-6 py-2 flex justify-between items-center">
        <Box className="flex text-xl w-full md:flex items-center justify-between h-14">
            QuantumChoice
            <ul className='hidden md:flex w-[400px] items-center justify-between'>
              <li><Text children={"Send feedback"} /></li>
              <li className='flex items-center'>
                <Text className='px-2'children={"Register"} />
                <span>/</span>
                <Text className='px-2' children={"Login"} />
              </li>
            </ul>
        </Box>
    </Box>
  )
}

export default NavBar