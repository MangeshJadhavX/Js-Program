function wait(n) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n * 1000); // Convert seconds to milliseconds
    });
  }
  
  // Example usage:
  const secondsToWait = 3;
  
  wait(secondsToWait).then(function(){
    console.log(`the promises resolved after ${secondsToWait} seconds`);
  })
   