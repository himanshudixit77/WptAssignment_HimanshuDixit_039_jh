const url="";
let data={
    host:"localhost",
    user:"himanshu1",
    password:"cdac",
    database:"kanpur",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(data);
let category="Office";
let itemno=50;
con.query("update item set category=? where itemno=?",[category,itemno],(err,res)=>{
    if(err){
        console.log("Update command failed");
    }else{
        if(res.affectedRows===0){
            console.log("Zero rows affected , update failed")
        }else{
        console.log("Update command succeed"+res.affectedRows);}
    }
});