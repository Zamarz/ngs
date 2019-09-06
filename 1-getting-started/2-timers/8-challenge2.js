let i = 0;
const log = setInterval(() => {
	console.log('Hello World');
  i += 1;

if (i === 5) {
    console.log('Done');
    clearInterval(log);}
  }, 1000);

 

  	
  	
  // Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
