//childprocess module

// child process is a node module used to create a sub process withing a script
// you can perform different tasks with your scrit by just using some methods

// child process module has 4 methods
// spawn()
// exec()
// execFile()
// fork()

const cp = require('child_process')

// cp.execSync('calc') // this method is used to run a command in the terminal

// cp.execSync('start chrome') //open chrome browser mean system app or software

// cp.execSync('start chrome https://jayambe36.github.io/') //run website in chrome browser


console.log('output ' + cp.execSync('node 1_helloworld.js')) // this method is used to run a command in the terminal and return the output

console.log('output ' + cp.execSync('node demo.js')) // this method is used to run a command in the terminal and return the output