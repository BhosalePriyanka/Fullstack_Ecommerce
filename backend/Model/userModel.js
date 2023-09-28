const connection = require('./productModel')

// connection.query('CREATE TABLE IF NOT EXISTS USER(EMAIL varchar(30) unique,PASSWORD varchar(15) unique)',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('USER Table Created')
//     }
// })

// connection.query('ALTER TABLE USER MODIFY PASSWORD VARCHAR(100) UNIQUE',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('USER Table altered')
//     }
// })
// connection.query('ALTER TABLE USER ADD COLUMN(ID integer(5) unique auto_increment not null)',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('USER table Altered.')
//     }
// })

// connection.query('select * from USER where email = ? ', ['priya@gmail.com'],(err,result)=>{
//     if(err){
//        console.log(err)
//     }
//     else{
//         console.log(result)
//     }
//     })

// connection.query('Alter Table USER Add Column(USERNAME Varchar(50) NOT NULL)',(error,result)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Uername Added into USER Table')
//     }
// }) 


module.exports = connection