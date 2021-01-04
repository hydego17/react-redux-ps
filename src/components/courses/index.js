import React, { Component } from 'react';
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
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

import CourseList from './CourseList';

class CoursesPage extends Component {
  // state = {
  //   course: {
  //     title: '',
  //   },
  // };

  // handleChange = (e) => {
  //   const course = { ...this.state.course, title: e.target.value };

  //   this.setState({ course });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  //   this.setState({ course: { title: '' } });
  // };

  componentDidMount() {
    const {courses, authors, actions} = this.props;

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
        <Heading>Courses</Heading>
        <Divider my={6} />

        {/* <Box as="form" onSubmit={this.handleSubmit} py={6}>
          <FormControl>
            <FormLabel>Add Course</FormLabel>
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.course.title}
            />
          </FormControl>
          <Button my={4} type="submit">
            Save
          </Button>
        </Box> */}

        <Box py={2} px={4} border="1px solid #ededed" rounded="xl">
          {this.props.courses.length ? (
            // this.props.courses.map((course, idx) => (
            //   <Box key={idx} py={2} borderBottom="1px solid #ededed">
            //     <Text>{course.title} </Text>
            //   </Box>
            // ))
            <CourseList courses={this.props.courses} />
          ) : (
            <Text>No courses available </Text>
          )}
        </Box>
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array,
  authors: PropTypes.array,
  actions: PropTypes.object.isRequired,
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
