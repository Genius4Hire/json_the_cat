const request = require('request');
// const fetchBreedDescription = require('index');
//const fs = require('fs');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    const data = JSON.parse(body)[0];
    if (data) {
      return callback(error, data.description);
    } else {
      return callback("Problem with search. Breed not found!");
    }
  });
};

module.exports = {fetchBreedDescription};

