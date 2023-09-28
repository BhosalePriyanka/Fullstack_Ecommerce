const jwt = require('jsonwebtoken')
const connection = require('./Model/userModel')

const auth = async(req,res,next)=>{
    const {authorization} = req.headers
if(!authorization){
    return res.json({error : 'Authorization Required'})
}
    const token = authorization.split(' ')[1];
    console.log(token)

    try{
        const email = jwt.verify(token,process.env.secret)
        console.log(email)
        connection.query('Select * from USER where EMAIL = ? ',[email.email],(error,result)=>{
        if(error){
             (console.log)
        }
        if(result){
        user = result // passed to create and get all products in PROductController
        next()
        }
    })  
   
    }catch(error){
        return res.json({error:'Request is not authorized'})
    }

}
module.exports = auth