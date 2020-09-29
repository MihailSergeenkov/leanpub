import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useFetchAuthors from '../hooks/useFetchAuthors';
import filestackUpload from '../lib/filestackUpload';
import createBook from '../lib/createBook';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'NewBook' });

const NewBook = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { errors, register, handleSubmit, formState: { isSubmitting } } = useForm();
  const history = useHistory();

  const authors = useFetchAuthors();

  const onSubmit = async ({link, ...fields}) => {
    const uploadResult = await filestackUpload(link[0]);
    const createBookResult = await createBook({
      ...fields,
      link: uploadResult.url,
    })

    const bookId = createBookResult.records[0].id;

    history.push(`/books/${bookId}`);
  }

  return (
    <main className={classes.root}>
      <Helmet>
        <title>
          New book
        </title>
      </Helmet>
      <h1>New book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='name'
          label='Name'
          register={register({ required: 'This is required!' })}
          errors={errors}
        />
        <Field
          name='description'
          label='Description'
          register={register}
        />
        <Field
          name='pages'
          label='Pages'
          register={register}
        />
        <Field
          name='minimumPrice'
          label='Minimum Price'
          register={register({ required: 'This is required!' })}
          errors={errors}
        />
        <Field
          name='link'
          label='Image'
          type='file'
          register={register({ required: 'This is required!' })}
          errors={errors}
        />
        <Field
          name='authors[0]'
          label='Author'
          type='select'
          options={authors}
          register={register({ required: 'This is required!' })}
          errors={errors}
        />
        <button disabled={isSubmitting}>Add book</button>
      </form>
    </main>
  );
};

export default NewBook;

const Field = ({ register, label, type, name, options, errors }) => {
  const component = type === 'select' ? (
    <select ref={register} name={name}>
      {
        options.map((author, index) => (
          <option value={author[0]} key={index}>
            {author[1]}
          </option>
        ))
      }
    </select>
  ) : (
    <input ref={register} name={name} type={type} />
  );

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {component}
    {errors && errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

Field.propTypes = {
  register: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  errors: PropTypes.object,
};
