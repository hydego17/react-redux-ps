import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as coursesActions from '../../redux/actions/courseActions';

import PropTypes from 'prop-types';

import { Heading, Divider } from '@chakra-ui/react';

class CoursesPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    course: {
      title: '',
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };

    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(coursesActions.createCourse(this.state.course));
  };

  render() {
    return (
      <>
        <Heading>Courses</Heading>
        <Divider my={6} />

        <form onSubmit={this.handleSubmit}>
          <h2>Add Course</h2>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
