// npm i axios
import axios from 'axios';

axios
  .get('https://www.google.com')
  .then((response) => {
    console.log('HTML Content of Google:', response.data);
  })
  .catch((error) => console.log(error));
