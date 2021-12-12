const url = require('url');

const myURL = new URL(
  'http://mywebsite.com:200/hello.html?id=100&status=active',
);

//Serialized url
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain) with the port info
console.log(myURL.host);

//Host name
console.log(myURL.hostname);

//Path name
console.log(myURL.pathname);

//Serialized query
console.log(myURL.search);

//add param
myURL.searchParams.append('ABC', '123');

//Param object
console.log(myURL.searchParams);

//loop through Params
myURL.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
