const express = require('express');

const app = express();


/*
  Route: GET /abc or /ac
  Description: Matches 'abc' or 'ac' because 'b' is optional (due to '?' in path)
  Response: Returns "Hello World"
*/
app.get(/ab?c/, (req, res) => {
  return res.send('Hello from ab?c');
});


/*
  Route: GET /abc, /abbc, /abbbc, etc.
  Description: Matches any route where 'a' is followed by one or more 'b's and then 'c'.
  Example URLs: /abc, /abbc, /abbbc
  Response: Returns "Hello World"
*/
app.get(/ab+c/, (req, res) => {
  return res.send('Hello from ab+c');
});


/*
  Route: GET /abcd, /abxcd, /abanythingcd
  Description: Matches any route where 'a' is followed by 'b', then anything (including nothing), and then 'cd'.
  Example URLs: /abcd, /abxcd, /ab123cd, /abxyzcd
  Response: Returns "Hello World"
*/
app.get("/ab*cd", (req, res) => {
  return res.send('Hello from ab*cd');
});


/*
  Route: GET /ae or /axye
  Description: Matches 'ae' or 'axye' because 'xy' is optional (due to '?' in path)
  Response: Returns "Hello World"
*/
app.get(/a(xy)?e/, (req, res) => {
  return res.send('Hello from a(bc)?e');
});


/*
  Route: GET /auve or /auvuvuve
  Description: Matches any route where 'a' is followed by one or more 'uv's and then 'e'
  Response: Returns "Hello World"
*/
app.get(/a(uv)+e/, (req, res) => {
  return res.send('Hello from a(uv)+e');
});


/*
  Route: GET /abm or /m or /ambmb
  Description: Matches any route where 'm' should be
  Response: Returns "Hello World"
*/
app.get(/m/, (req, res) => {
  return res.send('Hello from /m/');
});


/*
  Route: GET /butterfly , /mefly
  Description: Matches any route which ends with 'fly'
  Response: Returns "Hello World"
*/
app.get(/.*fly$/, (req, res) => {
  return res.send('Hello from /.*fly$/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});