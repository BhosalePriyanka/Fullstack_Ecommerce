const validator = require('validator')
const bcrypt =  require('bcrypt');
const connection = require('../Model/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const nodemailer = require('nodemailer');

const createToken = (email)=>{
   return jwt.sign({email},process.env.secret,{expiresIn:'3d'})
}
//signup
const signup = async(req,res)=>{
  const {email, password,username} = req.body;
  if(!username){
   return res.json({error:'Username Required'})
  }
  if(!email){
   return res.json({error:'Email-id Required'})
}

if(!validator.isEmail(email)){
    return  res.json({error:'Email id is not valid'})
  }
if(!password){
   return res.json({error:'Password Required'})
}
if(!validator.isStrongPassword(password)){
   return res.json({error:'Password is not strong'})
}
let emailIdExist = false;
connection.query('select * from USER where email = ? ',[email],(err,result)=>{
   if(err){
      console.log(err)
   }
   console.log(result)
   if(result.length && result[0].EMAIL === email){
      emailIdExist = true;
      return res.json({error:'Email id already exist'})
   }
  })

//bcrypt 
const genSalt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(password,genSalt)
if(emailIdExist === false){
connection.query('Insert into USER(EMAIL,PASSWORD,USERNAME) Values(?,?,?)',[email,hashPassword,username],(error)=>{
   if(error){
      console.log(error)
   }
   else{
      console.log('Data inserted in to USER Table')
      return res.json({message:'Data added sucessfully'})
   }
})
}
}

//Login setup
const login = async(req,res)=>{
   const{email,password} = req.body
if(!email || !password){
   return res.json({error:'All filed required'})
}

connection.query('select * from USER where BINARY EMAIL = ? ',[email],async(err,result)=>{
   if(err){
       console.log(err)
   }
   if(!result.length){
      return res.json({error:'Email id not exist'})
   }
   
   const match = await bcrypt.compare(password,result[0].PASSWORD)
   if(!match){
     return res.json({error:'Password not matched'})
   }
   if(result){
      const token = createToken(result[0].EMAIL);
      const email = result[0].EMAIL;
      const username = result[0].USERNAME;
     return res.json({email,token,username})
   }
})
}

// Google Login
const googleLogin = async(req,res)=>{
const email = req.body.email;
const username = req.body.given_name
const token  = createToken(email)
return res.json({email,username,token})
}



//Reset Password
const resetPassword = async(req,res)=>{
const{email} = req.body
if(!email){
   return res.json({error:'Email id required'})
}

connection.query('select * from USER where BINARY EMAIL = ? ',[email],(err,result)=>{
   if(err){
       console.log(err)
   }
   if(result.length === 0){
      return res.json({error:'Email id not exist'})
   }
   if(result){
      const email = result[0].EMAIL
      const createToken = (email)=>{
         return jwt.sign({email},process.env.secret,{expiresIn:'5m'})
      }
      const token = createToken(email)
      const link = `https://fullstack-ecommerce-frontend.onrender.com/Password/${token}`
      var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: process.env.Nodemailer_Email,
           pass: process.env.Nodemailer_Password
         }
       });
       
       var mailOptions = {
         from: 'priyanka.patil970@gmail.com',
         to: email,
         subject: 'Reset Password',
         text:`Please click on link to change your password. Link valid for 5 minutes only. 
         ${link}`
       };
       
       transporter.sendMail(mailOptions, function(error, info){
         if (error) {
           console.log(error);
         } else {
           console.log('Email sent: ' + info.response);
         }
       });

      return res.json({message:'Varification link sent on email'})
   }
})
}
//
const passwordLink = async(req,res)=>{
console.log(req.params)
jwt.verify(req.params.token,process.env.secret,function(err, decoded) {
if(err) {
   return res.json({error:'Error with token'})
} else { 
const{email,newpassword} = req.body
if(!email || !newpassword){
    return res.json({error:'All filed required'})
}

if(!validator.isStrongPassword(newpassword)){
   return res.json({error:'Password is not strong'})
}
// let emailIdDoesNotExist = false;
connection.query('select * from USER where BINARY EMAIL = ? ',[email],async(err,result)=>{
   if(err){
       console.log(err)
   }
   if(result.length === 0){
      // emailIdDoesNotExist = true;
      return res.json({error:'Email id not exist'})
   }
   if(result){
      const genSalt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newpassword,genSalt)
      connection.query('UPDATE USER SET PASSWORD = ? WHERE EMAIL = ?',[hashPassword,email],async(err,result)=>{
         if(err){
            console.log(err)
         }
        else{
            console.log('Passwored Saved')
            return res.json({message:'Data added sucessfully'})
         }
      })
      
   }
})

}//else
})//jwtvarify
}//passwordLink



module.exports = {signup,login,googleLogin,resetPassword,passwordLink}