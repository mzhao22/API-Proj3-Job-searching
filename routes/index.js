const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('job', {job: null, error: null, profile: null});
})

router.post('/', function(req, res) {
  let keyWords = req.body.job;
  let cityName = req.body.city;
  const requestData = {
    'keywords': keyWords,
    'location': cityName,
    "page": 1
  }
  const payload = {
    url: 'https://us.jooble.org/api/a62e6112-a00b-4e57-bd79-4a09563387ea',
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(requestData)
  }
  console.log(payload);
  request(payload, (error, response, data) => {
    if(response && response.statusCode == 200) {
      var jobList = JSON.parse(data);
      console.log(jobList.totalCount);
      console.log(jobList.jobs.length);
      res.render('job', {
        title: "GitHub Profile for ",
        profile: jobList
      });
    } else {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('data:', data); // Print the data from the GitHub API
    }
  });
});

module.exports = router;
