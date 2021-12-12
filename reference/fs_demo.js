//file system
const { error } = require('console');
const fs = require('fs');
const path = require('path');

//Make directory
// fs.mkdir(path.join(__dirname, '/test'), {}, (error) => {
//   if (error) throw error;
//   console.log('Directory created');
// });

//Make file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello world!',
//   (error) => {
//     if (error) throw error;
//     console.log('File created ..');
//   },
// );

// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   ' Hello world!',
//   (error) => {
//     if (error) throw error;
//     // append file
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Nodejs',
//       (error) => {
//         if (error) throw error;
//         console.log('File created ..');
//       },
//     );
//     console.log('File created ..');
//   },
// );

// read a file

// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   (error, data) => {
//     if (error) throw error;
//     console.log(data);
//   },
// );

// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'),
//   path.join(__dirname, '/test', 'fsFile.txt'),
//   (error) => {
//     if (error) throw error;
//     console.log('File renamed ...');
//   },
// );
