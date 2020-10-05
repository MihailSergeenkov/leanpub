import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';
import { useForm, useFieldArray } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import useFetchAuthors from '../../../shared/hooks/useFetchAuthors';
import filestackUpload from '../../../../helpers/filestackUpload';
import createBook from '../../../../helpers/createBook';
import Field from '../../../shared/elements/forms/Field';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'NewBook' });

const NewBook = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { errors, control, register, handleSubmit, formState: { isSubmitting } } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'authors',
  });

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ multiple: false });
  const history = useHistory();

  const authors = useFetchAuthors();

  const onSubmit = async ({ authors, ...fields}) => {
    const uploadResult = await filestackUpload(acceptedFiles[0]);
    const createBookResult = await createBook({
      ...fields,
      link: uploadResult.url,
      authors: authors.map((author) => author.id),
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
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
          }
        </div>
        <ul>
          {
            fields.map((field, index) => (
              <li key={field.id}>
                <Field
                  name={`authors[${index}].id`}
                  label='Author'
                  type='select'
                  options={authors}
                  register={register({ required: 'This is required!' })}
                  errors={errors}
                />
                <button onClick={() => remove(index)}>Delete</button>
              </li>
            ))
          }
        </ul>
        <div>
          <a onClick={() => append()}>Add author</a>
        </div>
        <button  disabled={isSubmitting}>Add book</button>
      </form>
    </main>
  );
};

export default NewBook;
