import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export default class CoursesPage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <Heading>Courses</Heading>
      </>
    );
  }
}
