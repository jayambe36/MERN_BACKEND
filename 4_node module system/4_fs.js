//files system

const fs = require('fs');

// //reading data from a file

// let fileContent = fs.readFileSync('f1.txt','utf-8')
// console.log('data of file 1 -> ' + fileContent)

// //writing in a file {data is overwritten} 
// // if f2.txt is not exist then file will be create by this code  and write data in it
// fs.writeFileSync('f2.txt', 'this is file 2')
// console.log('file has been written')


// // append a file {add data to file}

// fs.appendFileSync('f3.txt', ' || this is updated data')
// console.log('file has been appended')

// //create a file
// fs.writeFileSync('f5.txt', 'this is file 5')
// console.log('file has been created')


// // deleting a file
// fs.unlinkSync('f4.txt')
// console.log('file has been deleted')




















//directory

// //create a directory

// fs.mkdirSync('myDirectory')

//check the content inside a directory

let folderPath = 'F:\\CODEHELP DOT BATCH MERN STACK\\BASIC\\NODE JS SCALER\\4_node module system\\myDirectory'
let folderContent = fs.readdirSync(folderPath)

console.log("Folder Content : " + folderContent)

console.log("Folder Content : " , folderContent)

//check whether a directory exist or not
let doesExist = fs.existsSync(folderPath)
console.log('directory exist -> ' + doesExist)



//create a directory
fs.mkdirSync('hello')
console.log('folder has been created')



// //deleting a folder
fs.rmdirSync('hello')
console.log('folder has been deleted')



