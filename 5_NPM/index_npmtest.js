const figlet = require('figlet');

<<<<<<< HEAD
figlet("Smit is an excellent coder!!", function (err, data) {
=======
figlet("I love Coding!!", function (err, data) {
>>>>>>> d20427f (my second commit for express js)
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  