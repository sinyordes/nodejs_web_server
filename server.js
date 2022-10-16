const express = require("express");

const mysql = require("mysql");

///////////////CONNECT //////////////
const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

//////// STATUS RESPONSE///////
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});




///////// APP Def./////
const app = express();



//////////////API STATUS ///////////
app.get("/", (req, res) => {
  res.json({ message: "online" });
});



///////////////////// DATA READ FOR USER //////////////
app.get("/read/:id", (req, res) => {
  let user= req.params.id;
  let sql = `SELECT * FROM table WHERE id= ${req.params.id}`;



  db.query(sql, (err,rows) => {
    if(err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
    return  res.json(rows)

  });

});





////////////////////////////PORT ///////////////////////////////
app.listen("3000", () => {

  console.log("Server started on port 3000");

});