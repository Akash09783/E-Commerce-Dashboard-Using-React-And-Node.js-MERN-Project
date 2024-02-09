const express = require("express");
const User = require("./db/User");
require("./db/config");
const app = express();
const cors = require("cors");
const Product = require('./db/Product')
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
  res.send(result);
});
 //login 
app.post("/login", async (req, res) => {
  console.log(req.body)
  if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  }else{
    res.send({result:"no user"})
  }

});

//add product

app.post("/add-product",async(req,res)=>{
  let product = new Product(req.body)
  let result = await product.save();
  res.send(result)

})
//product list
app.get("/products",async(req,res)=>{
  let products = await Product.find();
if(products.length>0){
  res.send(products)
}else{
  res.send({result:"no one"})
}

})

//delete product 
app.delete('/product/:id',async(req,res)=>{
  const result =await Product.deleteOne({_id:req.params.id})
res.send(result)

})

// update product

app.get("/product/:id",async(req,res)=>{
let result = await Product.findOne({_id:req.params.id})

  res.send(result)


})





app.listen(5000);
