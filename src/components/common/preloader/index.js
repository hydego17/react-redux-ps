import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

const PreLoader = () => {
  return (
    <Box textAlign="center">
      <Spinner />
      <Text>Loading...</Text>
    </Box>
  );
};

export default PreLoader;
