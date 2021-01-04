const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios =  require('axios');


const app = express();
// Serve static index.html file
// app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/questions', (req, res)=> {
  axios.get('https://jservice.io/api/clues?value=200&category=21')
    .then((results) => {
      console.log(results.data)
      res.status(200).send(results.data);
    })


  // let URL1 = 'https://jservice.io/api/clues?value=200&category=21'
  // let URL2 = 'https://jservice.io/api/clues?value=200&category=7'
  // // let URL3 = "https://www.something2.com"

  // const promise1 = axios.get(URL1);
  // const promise2 = axios.get(URL2);
  // // const promise3 = axios.get(URL3);

  // Promise.all([promise1, promise2])
  // .then((response) => {
  //   res.status(200).send('in here');
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
})

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

