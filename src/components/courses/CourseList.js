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
  Flex,
  useToast,
} from '@chakra-ui/react';

const CourseList = ({ courses, deleteCourse }) => {
  const linkColor = useColorModeValue('teal.600', 'teal.400');

  const toast = useToast();

  function onDeleteClick(course) {
    confirm('are u sure') &&
      deleteCourse(course) &&
      toast({
        title: 'Course Deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
  }

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Author</Th>
          <Th>Category</Th>
          <Th>Option</Th>
        </Tr>
      </Thead>
      <Tbody>
        {courses.map((course) => {
          return (
            <Tr key={course.id}>
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
              <Td>
                <Flex>
                  <Button mr={2} size="sm">
                    <a href={'http://pluralsight.com/courses/' + course.slug}>
                      Watch
                    </a>
                  </Button>
                  <Button size="sm" onClick={() => onDeleteClick(course)}>
                    Delete
                  </Button>
                </Flex>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default CourseList;
