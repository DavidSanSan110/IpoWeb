import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export const Logo = () => {

  return (
    <>
      <Flex alignItems="center" ml={2}>
        <Link to="/">
          <Image src={logo} w={'40px'}/>
        </Link>
      </Flex>
    </>
  )

};