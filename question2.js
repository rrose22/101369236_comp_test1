const resolvedPromise = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      var success = {'message' : 'delayed success!'}
      resolve(success);

    },50)
  })
  return promise
}
const rejectedPromise = () => {
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          try {
              throw new Error('error: delayed exception!');
          } catch (e) {
              reject(e);
          }
      }, 500);
  })
  return promise
}

resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
    
rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });