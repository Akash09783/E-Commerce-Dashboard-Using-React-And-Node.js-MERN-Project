const express = require("express");
const User = require("./db/User");
require("./db/config");
const app = express();
const cors = require("cors");
const Product = require("./db/Product");
const Jwt = require('jsonwebtoken')
const jwtKey = 'e-dashboard'

app.use(express.json());
app.use(cors());

// const connectDB = async ()=>{
//   mongoose.connect("mongodb://localhost:27017/e-dashboard")
// const productSchema = new mongoose.Schema({})
//   const product = mongoose.model('product',productSchema);
//   const data = await product.find();
//   console.warn(data)

// }
// connectDB();

//register
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
    if(err){
      res.send({result:'something Went Wrong, PLease Try after Sometime'})
    }
    res.send({result,auth:token});

  })

});
//login
app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
          res.send({result:'something Went Wrong, PLease Try after Sometime'})
        }
        res.send({user,auth:token});

      })
    
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user" });
  }
});

//add product

app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
//product list
app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "no one" });
  }
});

//delete product
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

// update product

app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });

  res.send(result);
});

app.put("/productt/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});


//search

app.get("/search/:key",verifyToken,async(req,res)=>{
  let result = await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {company:{$regex:req.params.key}},
      {category:{$regex:req.params.key}}
    ]
  })
  res.send(result)

})

function verifyToken(req,res,next){
let token = req.headers['authorization'];
if(token){
  token = token.split(' ');
console.log("middleware called",token)
Jwt.verify(token,jwtKey,(err,valid)=>{
  if(err){
    res.status(401).send({result:"please provide valid token"})
  }else{
next();
  }

})
} else { 
res.status(403).send({result:"please add token with header"})
}


}







app.listen(5000);
