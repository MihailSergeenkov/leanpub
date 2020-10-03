import Axios from 'axios';

const API_TOKEN = 'keyjnhfZY4RsMqkWT';

const client = Axios.create({
  baseURL: 'https://api.airtable.com/v0/appskzwlULQeX6my9',
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  },
});

export default client;
