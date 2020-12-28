import React from 'react';
import { Box, Flex, Button, Container } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../themes/ColorModeSwitcher';

export default function Header() {
  const activeStyle = {
    color: 'Red',
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
        <Box as="nav">
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>

          {' | '}

          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>

          {' | '}

          <NavLink to="/courses" activeStyle={activeStyle}>
            Courses
          </NavLink>
        </Box>

        <ColorModeSwitcher />
      </Container>
    </Box>
  );
}
