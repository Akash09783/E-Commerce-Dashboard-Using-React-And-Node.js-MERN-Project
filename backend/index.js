const express = require("express");
const User = require('./db/User')
require('./db/config')
const app = express();

app.use(express.json())
// const connectDB = async ()=>{
//   mongoose.connect("mongodb://localhost:27017/e-dashboard")
// const productSchema = new mongoose.Schema({})
//   const product = mongoose.model('product',productSchema);
//   const data = await product.find();
//   console.warn(data)

// }
// connectDB();

app.post('/register',async(req,res)=>{
  let user = new User(req.body);
  let result =await user.save()
  res.send(result)


})


app.listen(5000);
