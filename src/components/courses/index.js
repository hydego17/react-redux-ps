import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as coursesActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

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

  componentDidMount(){
    this.props.actions.loadCourses().catch(error => {
      alert("Loading courses failed " + error)
    })
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

        <Box py={6} px={4} border="1px solid #ededed" rounded="md">
          {this.props.courses.length ? (
            this.props.courses.map((course, idx) => (
              <Box key={idx} py={2} borderBottom="1px solid #ededed">
                <Text>{course.title} </Text>
              </Box>
            ))
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
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
