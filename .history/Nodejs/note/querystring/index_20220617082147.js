const querystring = require("querystring");

const str = "name=bojue&age=100&location=huaian";

const a = querystring.parse(str);

const b = querystring.stringify(a);

console.log(b);
