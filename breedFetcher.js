const request = require('request');
//const fs = require('fs');

const args = process.argv.slice(2);

const BREED = args[0];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + BREED;



request(URL, (error, response, body) => {
  if (error) {
    console.log('Request error:', error); // Print the error if one occurred
  } else {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(URL);
    const data = JSON.parse(body)[0];
    // console.log(data);
    if (data !== undefined && response.statusCode === 200) {
      console.log(data.description);
    } else {
      console.log("Problem with search!");
    }

  }

  // fs.writeFile(PATH, 'utf8', (error, body) => {
  //   if (error) {
  //     console.log("File error: ", error)
  //   } else {
  //     console.log(`File saved in ${PATH}`);
  //   };
  // });

});