//os module

const os = require('os');

console.log(os.arch()) // architecture (64 or 32)

console.log(os.cpus()) // information about the cpus

console.log(os.freemem()) // free memory

console.log(os.totalmem()) // total memory  

console.log(os.homedir()) // home directory

console.log(os.hostname()) // hostname  

console.log(os.platform()) // platform (win32, linux, darwin)   

console.log(os.release()) // release    

console.log(os.tmpdir()) // temporary directory 

console.log(os.type()) // type (Windows_NT, Linux, Darwin)  

console.log(os.uptime()) // uptime in seconds   

console.log(os.userInfo()) // user information  

console.log(os.networkInterfaces()) // network interfaces