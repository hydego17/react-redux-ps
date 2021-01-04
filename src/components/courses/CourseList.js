import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const CourseList = ({ courses }) => (
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
                <a
                  className="btn btn-light"
                  href={'http://pluralsight.com/courses/' + course.slug}
                >
                  Watch
                </a>
              </Button>
            </Td>
            <Td>
              <Link to={'/course/' + course.slug}>{course.title}</Link>
            </Td>
            <Td>{course.authorId}</Td>
            <Td>{course.category}</Td>
          </Tr>
        );
      })}
    </Tbody>
  </Table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
