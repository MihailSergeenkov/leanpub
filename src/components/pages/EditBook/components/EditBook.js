import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useFetchBookFromId } from '../../../shared/hooks/useFetchBooks';
import updateBook from '../../../../helpers/updateBook';
import Field from '../../../shared/elements/forms/Field';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'EditBook' });

const EditBook = ({ match: { params } }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const bookId = params.id;

  const { book } = useFetchBookFromId(bookId);

  const { errors, register, handleSubmit, formState: { isSubmitting } } = useForm();
  const history = useHistory();

  const bookName = book && book.name;
  const bookDescription = book && book.description;

  const onSubmit = async (fields) => {
    await updateBook(bookId, fields);
    history.push(`/books/${bookId}`);
  }

  return (
    <main className={classes.root}>
      <Helmet>
        <title>
          {book ? `Edit ${book.name}` : 'Looding...'}
        </title>
      </Helmet>
      <h1>Edit book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='name'
          label='Name'
          register={register({ required: 'This is required!' })}
          errors={errors}
          defaultValue={bookName}
        />
        <Field
          name='description'
          label='Description'
          register={register}
          defaultValue={bookDescription}
        />
        <button disabled={isSubmitting}>Edit book</button>
      </form>
    </main>
  );
};

EditBook.propTypes = {
  match: PropTypes.any,
};

export default EditBook;
