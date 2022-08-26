// const Mongodb = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017/students"


// Mongodb.connect(url, (err, db) => {
//     if (err) {
//       console.error("Error while connecting", err)
//       return
//     }
//     // const database = db.db("Human_Resoure")
//     // const dbCollection = database.collection("employee")
//     // console.log(dbCollection)
    
//    db.createcollection("class")
//    console
    
// })
// const MongoClient = require("mongodb").MongoClient;

// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {   //here db is the client obj
//     if (err) throw err;
//     const dbase = db.db("prepbyte"); //here is similar to (use database) syntax
//     const worker = [{id:1, name:"krut", salary:1000},{id:2,name:"ruth",salary:3000}];
//     dbase.collection("workers").insertMany(worker,(err, suc)=>{
//              if (err) console.log(err);
//               console.log("Data is inserted successfully.")
//     })
// });