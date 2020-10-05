import httpClient from './airtableClient';

const deleteBook = (id) => {
  httpClient
    .delete(`/books?records[]=${id}`)
    .then(result => result.data)
  };

export default deleteBook;
