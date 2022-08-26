const Mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/students"


Mongodb.connect(url, (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
      return
    }
    // const database = db.db("Human_Resoure")
    // const dbCollection = database.collection("employee")
    // console.log(dbCollection)
    
   db.db("Human").collection("items",(error,suc)=>{
        console.log("danwjndjnwd")
        db.close()
    })
})