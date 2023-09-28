const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Database Connnected')
//     }
// })

// connection.query('CREATE DATABASE IF NOT EXISTS Ecommerce  ',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Created Database')
//     }
// })

// connection.query('CREATE TABLE IF NOT EXISTS PRODUCT(IMAGE longblob not null, TITLE varchar(100) not null, PRICE decimal(10,2) not null,QUANTITY integer(5) not null,AMOUNT decimal(10,2) not null)',
// (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Table Created')
//     }
// })
// connection.query('Alter table PRODUCT Add Column(ORDERDATE DATE NOT NULL DEFAULT (Current_Date))',(error,result)=>{
// if(error){
//     console.log(error)
// }else{
//     console.log('ORDERDATE column added in to PRODUCT Table')
// }
// })
    // connection.query('Alter table PRODUCT modify ORDERDATE DATE NOT NULL DEFAULT (Current_Date)',(error,result)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     else{
    //         console.log('Modified ORDERDATE column')
    //     }
    
    // })


// connection.query('ALTER TABLE PRODUCT ADD COLUMN(ID integer auto_increment unique not null)',
// (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Table Updated')
//     }
// })

// connection.query('SELECT * FROM PRODUCT',
// (err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }

// })
// connection.query('DELETE FROM PRODUCT WHERE ID = 1',
//     (err)=>{
//         if(err){
//             console.log(err)
//     }
//      else{
//             console.log('Deleted')

//     }
//     })

// connection.query('ALTER TABLE PRODUCT ADD COLUMN(USER_ID integer(5) NOT NULL)',(error,result)=>{
//     if(error){
//         console.log(error)
//     }
//     if(result){
//         console.log('USER_ID column added in to PRODUCT table')
//     }
// })
// connection.query('ALTER TABLE PRODUCT DROP COLUMN USER_ID',(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     if(result){
//         console.log('USER_ID COLUMN DELETED')
//     }
// })

// connection.query('ALTER TABLE PRODUCT ADD COLUMN (USER_EMAILID varchar(30) NOT NULL)',(err,result)=>{
//     if(err){
//                 console.log(err)
//             }
//             if(result){
//                 console.log('USER_EMAILID COLUMN ADDED INTO PRODUCT TABLE')
//             }
// })
    module.exports = connection;