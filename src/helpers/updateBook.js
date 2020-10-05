import httpClient from './airtableClient';

const updateBook = (id, fields) => (
  httpClient
    .patch('/books', {
      records: [
        {
          id,
          fields
        }
      ]
    })
    .then(result => result.data)
);

export default updateBook;
