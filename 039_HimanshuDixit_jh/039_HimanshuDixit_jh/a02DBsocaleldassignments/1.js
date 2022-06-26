const url="";
let data={
    host:"localhost",
    user:"himanshu1",
    password:"cdac",
    database:"kanpur",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(data);

console.log("Database Connected");