import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../themes/ColorModeSwitcher';

export default function Header() {
  const activeStyle = {
    // fontWeight: '600',
    color: '#008891',
  };

  return (
    <Box as="header" p={6}>
      <Container
        px={0}
        d="flex"
        maxW="4xl"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex as="nav" fontWeight={600} >
          <Box pr={2}>
            <NavLink to="/" exact activeStyle={activeStyle}>
              Home
            </NavLink>
          </Box>

          {' | '}

          <Box px={2}>
            <NavLink to="/courses" activeStyle={activeStyle}>
              Courses
            </NavLink>
          </Box>

          {' | '}

          <Box px={2}>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </Box>
        </Flex>

        <ColorModeSwitcher />
      </Container>
    </Box>
  );
}
