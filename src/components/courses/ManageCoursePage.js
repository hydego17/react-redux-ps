import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import * as courseAction from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import { Heading, Divider, Box } from '@chakra-ui/react';

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert('Loading courses failed ' + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert('Loading authors failed ' + error);
      });
    }
  }, []);

  return (
    <>
      <Heading>Manage Course</Heading>
      <Divider my={6} />

      <Box py={2} px={4} border="1px solid #ededed" rounded="xl"></Box>
    </>
  );
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array,
  authors: PropTypes.array,
  loadCourses: PropTypes.func,
  loadAuthors: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

// assign mapDispatchToProps as object instead
const mapDispatchToProps = {
  loadCourses: courseAction.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
