const mixedArray = ['PIZZA',10,true,25,false,'Wings']
function lowerCaseWords(inputArray) {
  let promise = new Promise((resolve, reject) => {
      if (Array.isArray(inputArray) == false) {
          reject(new Error('This is not an array'));
      } else {
          const filteredArray = inputArray.filter(e => typeof e === 'string').map(word => word.toLowerCase());
          resolve(filteredArray);
      }
  });
  return promise
}
lowerCaseWords(mixedArray)
    .then(result => {
        console.log('Array with lowercase words only: \n', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
