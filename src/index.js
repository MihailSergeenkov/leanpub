import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const book = {
  'name': 'React+D3v4',
  'description': 'Reusable dataviz & games using modern JavaScript',
  'pages': '249',
  'language': 'english',
  'progress': '100',
  'link': 'https://d2sofvawe08yqg.cloudfront.net/reactd3jses6/hero2x?1549481353',
  'author': {
    'fullName': 'Swizec Teller',
    'email': 'swizec_teller@email.com',
    'avatar': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
    'information': 'Hi, I’m a digital nomad and full stack web engineer.'
  },
  'minimumPrice': '49.00',
  'suggestedPrice': '49.00',
  'collectedAmount': '5039.00',
  'expectedAmount': '8000.00'
};

ReactDOM.render(
  <App book={book} />,
  document.getElementById('root')
);