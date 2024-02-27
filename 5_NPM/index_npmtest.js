const figlet = require('figlet');

figlet("NIKKY I love You My Cutie Pie!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  