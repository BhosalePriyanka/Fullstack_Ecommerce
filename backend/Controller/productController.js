const connection = require('../Model/productModel')
const createProducts = async(req,res)=>{
    const{image,title,price,quantity,amount}=req.body
    console.log(user[0].EMAIL)// got from auth
    connection.query('INSERT INTO PRODUCT(IMAGE,TITLE,PRICE,QUANTITY,AMOUNT,USER_EMAILID) VALUES(?,?,?,?,?,?)',[image,title,price,quantity,amount,user[0].EMAIL],(err,result)=>{
    if(err){
        console.log(err)
    }
    if(result){
        console.log('Value added in to PRODUCT table')
    }
}) 
}
const getProducts = async(req,res)=>{
    
    connection.query('select * from PRODUCT where USER_EMAILID = ? order by ORDERDATE DESC',[user[0].EMAIL],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.json(result)
        }
    })
}

module.exports = {createProducts,getProducts}