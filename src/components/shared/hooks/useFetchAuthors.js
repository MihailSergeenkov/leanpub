import { useState, useEffect } from 'react';
import httpClient from '../../../helpers/airtableClient';

const _fetchAuthors = () => (
  httpClient
    .get('/authors')
    .then(result => result.data)
    .then(_mapAuthorsFromAirTable)
);

const _mapAuthorsFromAirTable = ({ records }) => {
  return records.map((record) => {
    const id = record.id;
    const fullName = record.fields.fullName;

    return [id, fullName];
  })
};

const useFetchAuthors = () => {
  const [
    authors, 
    setAuthors,
  ] = useState([]);

  useEffect(() => {
    _fetchAuthors()
      .then((result) => {
        setAuthors(result)
      })
  }, [authors]);

  return authors;
};

export default useFetchAuthors;
