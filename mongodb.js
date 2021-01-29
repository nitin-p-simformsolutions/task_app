//CRUD operation
//mongobd driver : connect nodejs with mongodb
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id.toHexString());
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error, client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }
    const db =client.db(databaseName);

    //Insert operation
    // db.collection('user').insertOne({
    //     //_id:id,
    //     name:'nitin',
    //     age:21
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert User');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('user').insertMany([{
    //     name: 'jado',
    //     age:14
    // },{
    //     name: 'pihu',
    //     age:10
    // }],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //})

    // db.collection('tasks').insertMany([
    //     {
    //         description:'take photo',
    //         completed: false
    //     },
    //     {
    //         description:'work',
    //         completed:true
    //     },
    //     {
    //         description:'yoga',

    //         completed:true
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert document');
    //     }
    //     console.log(result.ops);
    // })

    //Reading data
    // db.collection('user').findOne({_id:new ObjectID('6007c93473e3423a20034248')},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch user');
    //     }
    //     console.log(user);
    // })
    //find returns cursor which has multiple methods like toArray , count, limit
    // db.collection('user').find({name:'naitik'}).toArray((error, users)=>{
    //     console.log(users);
    // })
    // db.collection('user').find({age:21}).count((error, count)=>{
    //     console.log(count);
    // })

    // db.collection('tasks').find({_id:new ObjectID('6007b023b973c14778e5b363')}).toArray((error,task)=>{
    //     console.log(task);
    // })
    // db.collection('tasks').find({completed:true}).toArray((error,task)=>{
    //     console.log(task);
    // })

    //Upadating Document
    // db.collection('user').updateOne({_id:new ObjectID('6007ab0df5b01f3bbcf0f0f7')},{
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{console.log(result.modifiedCount);})
    // .catch((err)=>{console.log(err);})

    // db.collection('tasks').updateMany({completed:false},{
    //     $set:{
    //         completed:true
    //     }
    // }).then(result => console.log(result))
    // .catch(err => console.log(err))

    //deleting in document
    // db.collection('user').deleteMany({
    //     age:21
    // }).then(result => console.log(result.deletedCount))
    // .catch(err => console.log(err))

    db.collection('tasks').deleteOne({
        description:'work'
    }).then(result => console.log(result.deletedCount))
    .catch(err => console.log(err))
})