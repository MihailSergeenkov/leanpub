import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <div>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <p>Ooops, page not found!</p>
    <Link to={'/'}>Go home!</Link>
  </div>
);

export default NotFound;
