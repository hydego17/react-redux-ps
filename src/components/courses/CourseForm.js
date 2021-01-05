import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  useToast,
} from '@chakra-ui/react';

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  const toast = useToast();

  // Error warning
  useEffect(() => {
    for (const [key, value] of Object.entries(errors)) {
      console.log(`${key}: ${value}`);

       toast({
        title: value,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }

  }, [errors]);

  return (
    <Box as="form" onSubmit={onSave}>
      <Heading as="h2" size="lg" py={4}>
        {course.id ? 'Edit' : 'Add'} Course
      </Heading>

      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          name="title"
          type="text"
          isInvalid={errors.title}
          onChange={onChange}
          value={course.title}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Author</FormLabel>
        <Select
          name="authorId"
          placeholder="Select author"
          isInvalid={errors.authorId}
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
          isInvalid={errors.category}
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
