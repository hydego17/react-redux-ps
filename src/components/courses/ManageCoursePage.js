import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import * as courseAction from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

// Chakra Comps
import { Heading, Divider, Box } from '@chakra-ui/react';

import { newCourse } from '../../../tools/mockData';
import CourseForm from './CourseForm';

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert('Loading courses failed ' + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert('Loading authors failed ' + error);
      });
    }
  }, [props.course]);

  function handleChange(e) {
    const { name, value } = e.target;

    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    saveCourse(course).then(() => {
      history.push('/courses');
    });
  }

  return (
    <>
      <Heading>Manage Course</Heading>
      <Divider my={6} />

      <Box py={2} px={4} border="1px solid #ededed" rounded="xl">
        <CourseForm
          course={course}
          authors={authors}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
        />
      </Box>
    </>
  );
}

ManageCoursePage.propTypes = {
  history: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug || null);
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course = slug ? getCourseBySlug(state.courses, slug) : newCourse;

  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

// assign mapDispatchToProps as object instead
const mapDispatchToProps = {
  loadCourses: courseAction.loadCourses,
  saveCourse: courseAction.saveCourse,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
