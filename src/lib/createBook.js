import httpClient from './airtableClient';

const createBook = (fields) => (
  httpClient
    .post('/books', {
      records: [
        {
          fields
        }
      ]
    })
    .then(result => result.data)
);

export default createBook;
