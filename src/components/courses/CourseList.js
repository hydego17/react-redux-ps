import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';

const CourseList = ({ courses }) => {
  const linkColor = useColorModeValue("teal.600", "teal.400")
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th />
          <Th>Title</Th>
          <Th>Author</Th>
          <Th>Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        {courses.map((course) => {
          return (
            <Tr key={course.id}>
              <Td>
                <Button>
                  <a href={'http://pluralsight.com/courses/' + course.slug}>
                    Watch
                  </a>
                </Button>
              </Td>
              <Td>
                <ChakraLink
                  as={ReactLink}
                  to={'/course/' + course.slug}
                  color={linkColor}
                >
                  {course.title}
                </ChakraLink>
              </Td>
              <Td>{course.authorName}</Td>
              <Td>{course.category}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;