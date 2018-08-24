/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promised = new Promise(function(resolve, reject) {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
        //throw (error);
      } else {
        resolve(data.toString().split('\n')[0]);
      }
    });
  });
  // .then(function(done) {
  //   return done.toString().split('\n')[0];
  // }).catch(function(error) {
  //   return error;
    
  // });
  
  return promised;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return promised = new Promise(function(resolve, reject) {
    request(url, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.statusCode);
      }
    });
  });
  // .then(function(result) {
  //   return result.statusCode;
  // }).catch(function(err) {
  //   return err;
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
