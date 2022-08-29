const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {   //here db is the client obj

    if (err) throw err;
    const dbase = db.db("company"); //here is similar to (use database) syntax
     const hireling = [{   "_id": {     "oid": "61cc5034af6ba4fcb54e8c38"   },   "firstName": "John",   "lastName": "Doe",   "salary": "25000",   "department": "HR",   "lastCompany": "X",   "lastSalary": "10000",   "overallExp": "2",   "contactInfo": "1234567890",   "yearGrad": "2016",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3a"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3b"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3c"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3d"   },   "firstName": "Jame",   "lastName": "roh",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c3e"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c3f"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c40"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c41"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c42"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c43"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c44"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c45"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" }]
    dbase.collection("hirelings").insertMany(hireling,(err, suc)=>{// here data is being inseted many
             if (err) console.log(err);
              console.log("Data is inserted successfully.")
    })
    // const herling_data = {"_id":{"oid":"61sse5034asdwddwdwdsdwd"},"firstName":"Krut","lastName":"sutnga","salary": "25000",   "department": "HR",   "lastCompany": "X",   "lastSalary": "10000",   "overallExp": "2",   "contactInfo": "1234567890",   "yearGrad": "2016",   "gradStream": "CSE" }
    // dbase.collection("hirelings").insertOne(herling_data,(err,suc)=>{// here data is insert once only
    //     if(err) console.log(err)
    //     console.log("one data is inserted")
    // })
    dbase.collection("hirelings").find().toArray((err,result)=>{// print all the data in the collection
        if(err) console.log(err)
        console.log(result)
    })
    dbase.collection("hirelings").find({salary:{$gt:"30000"}}).toArray((err,result)=>{
        if(err) console.log(err)
        console.log(result)
    })
    dbase.collection("hirelings").find({overallExp:{$gt:"2"}}).toArray((err,result)=>{
        if(err) console.log(err)
        console.log(result)

    })
    dbase.collection("hirelings").find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}).toArray((err,result)=>{
        if(err) console.log(err)
        console.log(result)
})      
    dbase.collection("hirelings").updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}},(err,res)=>{
        if(err) console.log(err)
        console.log(res)
    })
    dbase.collection("hirelings").deleteMany({lastCompany:"Y"},(err,res)=>{
        if(err) console.log(err)
        console.log(res)
    })
});