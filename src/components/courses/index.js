import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import * as courseAction from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import {
  Heading,
  Divider,
  Box,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';

import CourseList from './CourseList';
import PreLoader from '../common/preloader'

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Loading courses failed ' + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Loading authors failed ' + error);
      });
    }
  }

  render() {
    return (
      <>
        {/* Redirect to  */}
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}

        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Heading pr={6}>Courses</Heading>
          </Flex>

          <Button
            onClick={() => this.setState({ redirectToAddCoursePage: true })}
          >
            Add Course
          </Button>
        </Flex>
        <Divider my={6} />

        {this.props.loading ? (

          <PreLoader/>

        ) : (
          <Box py={2} px={4} border="1px solid #ededed" rounded="xl">
            {this.props.courses.length ? (
              <CourseList courses={this.props.courses} />
            ) : (
              <Text>No courses available </Text>
            )}
          </Box>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array,
  authors: PropTypes.array,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseAction.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
