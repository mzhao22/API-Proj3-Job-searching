const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const router = express.Router();
const request = require('request');
//const apiKey = 'a62e6112-a00b-4e57-bd79-4a09563387ea';

//Access all of the static files within the ‘public’ folder.
app.use(express.static('public'));
//By using body-parser we can make use of the req.body object.
app.use(bodyParser.urlencoded({ extended: true }));
//set ejs as rendering engine.
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index.html', {jobTitle: null, error: null});
})





/* GET home page. */
router.post('/', function(req, res) {
  let keyWords = req.body.job;
  let cityName = req.body.city;
  console.log(keyWords);
  console.log(cityName);
  const payload = {
    url: 'https://us.jooble.org/api/a62e6112-a00b-4e57-bd79-4a09563387ea',
    headers: {
      'Keywords': 'request',
      'Authorization': `token ${process.env['GITHUB_USER_READ_TOKEN']}`
    }
  }


  /*
  request(payload, (error, response, data) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('data:', data); // Print the data from the GitHub API
    var a = JSON.parse(data);
    console.log(a.blog);
    res.render('index',
    {
      title: "GitHub Profile for " + a.name,
      profile: a
    });
  });*/
});

module.exports = router;


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
