const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const router = express.Router();


/* GET home page. */
app.get('/', function (req, res) {
  res.render('index.html', {weather: null, error: null});
})
  app.post('/jobs', function(req, res) {
  console.log("eee");
  let keyWords = req.body.job;
  let cityName = req.body.city;
  console.log("ee");
  console.log(keyWords);
  console.log(cityName);
  const payload = {
    url: 'https://us.jooble.org/api/a62e6112-a00b-4e57-bd79-4a09563387ea',
    headers: {
      'Keywords': `${keyWords}`,
      'Authorization': `${cityName}`
    }
  }
  request(payload, (error, response, data) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('data:', data); // Print the data from the GitHub API
    var a = JSON.parse(data);
    console.log(a.blog);
    res.render('index',
    {
      title: "GitHub Profile for ",
      profile: a
    });
  });
});

module.exports = router;
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
