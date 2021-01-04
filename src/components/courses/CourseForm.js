import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
} from '@chakra-ui/react';

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <Box as="form" onSubmit={onSave}>
      <Heading as="h2" size="md">
        {course.id ? 'Edit' : 'Add'} Course
      </Heading>

      {errors.onSave && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}> {errors.onSave}</AlertTitle>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}

      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          name="title"
          type="text"
          onChange={onChange}
          value={course.title}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Author</FormLabel>
        <Select
          name="authorId"
          placeholder="Select author"
          value={course.authorId || ''}
          onChange={onChange}
        >
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Input
          name="category"
          type="text"
          onChange={onChange}
          value={course.category}
        />
      </FormControl>

      <Button my={4} type="submit" disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </Button>
    </Box>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
