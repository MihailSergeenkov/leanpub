import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthContext from './AuthContext';

import './index.css';

const book = {
  name: 'React+D3v4',
  description: 'Reusable dataviz & games using modern JavaScript',
  pages: '249',
  language: 'english',
  progress: '100',
  link: 'https://d2sofvawe08yqg.cloudfront.net/reactd3jses6/hero2x?1549481353',
  authors: [
    {
      fullName: 'Swizec Teller',
      email: 'swizec_teller@email.com',
      avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
      information: 'Hi, I’m a digital nomad and full stack web engineer.',
    },
    {
      fullName: 'Rafael A Irizarry',
      email: 'rafael_a_irizarry@email.com',
      avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/417060/original/Rafacrop.jpg?1439382014',
      information: 'Rafael Irizarry is a Professor of Biostatistics and Computational Biology.',
    },
    {
      fullName: 'Matthias Noback',
      email: 'matthias_noback@email.com',
      avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/128284/original/matthias-noback.jpg?1586530171',
      information: 'Matthias Noback has been building web applications since 2003.',
    },
    {
      fullName: 'Jeff Geerling',
      email: 'jeff_geerling@email.com',
      avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/209668/original/Social_Media_800px.jpg?1539382677',
      information: 'Jeff Geerling is a developer who has worked in programming and DevOps-related positions.',
    }
  ],
  minimumPrice: '49.00',
  suggestedPrice: '49.00',
  collectedAmount: '5039.00',
  expectedAmount: '8000.00',
  readers: 1230,
  additionalInfo: 'The Leanpub 45-day 100% Happiness Guarantee',
};

const currentUser = {
  email: 'user@email.com',
  firstName: 'Patrick',
  lastName: 'Wam',
  avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1846165/original/DSC_7016-small.jpg?1581154864'
};

const similarBooks = [
  {
    name: 'Symfony 5: The Fast Track',
    author: 'Fabien Potencier',
    image: 'https://d2sofvawe08yqg.cloudfront.net/symfony5-the-fast-track/hero2x?1581170327',
  },
  {
    name: 'The Hundred-Page Machine Learning Book',
    author: 'Andriy Burkov',
    image: 'https://d2sofvawe08yqg.cloudfront.net/theMLbook/hero2x?1549509109',
  },
  {
    name: 'Ansible for DevOps',
    author: 'Jeff Geerling',
    image: 'https://d2sofvawe08yqg.cloudfront.net/ansible-for-devops/hero2x?1589381387',
  },
  {
    name: 'The PowerShell Scripting and Toolmaking Book',
    author: 'Don Jones',
    image: 'https://d2sofvawe08yqg.cloudfront.net/powershell-scripting-toolmaking/hero2x?1593527000',
  },
  {
    name: 'Functional Design and Architecture',
    author: 'Alexander Granin',
    image: 'https://d2sofvawe08yqg.cloudfront.net/functional-design-and-architecture/hero2x?1589962550',
  },
];

ReactDOM.render(
  <AuthContext.Provider value={{currentUser: currentUser}}>
    <App book={book} similarBooks={similarBooks} />
  </AuthContext.Provider>,
  document.getElementById('root')
);
