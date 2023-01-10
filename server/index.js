const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ProductModel  = require('./models/products');
const db = require("./connection")
const products = require("./routes/products")

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())
 
app.use("/", products);

 

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));


//get all
// app.get('/',async (req,res)=>{
//     try {
//         const products = await ProductModel.find()
//         res.json(products)
//     } catch (err){
//         res.status(500).json({message: err.message})
//     }
//     // res.send('hello world')
// })

//insertOne
// app.post('/', async(req,res)=>{
//     const {id, category, license, product_name, product_no, product_description, price, picture1, picture2 } = req.body;
//     try{
//         const newProduct = await ProductModel.create({id, category, license, product_name, product_no, product_description, price, picture1, picture2});
//         req.json(newProduct)
//     }catch(error){
//         res.status(500).send(error)
//     }
// })

// app.listen(8000,()=>{
//     console.log("listening to port http://localhost:8000/")
// })




















