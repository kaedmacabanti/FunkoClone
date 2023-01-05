const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ProductModel  = require('./models/products');
const db = require("./connection")

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())
 
//insertOne
app.post('/', async(req,res)=>{
    const {id, category, license, product_name, product_no, product_description, price, picture1, picture2 } = req.body;
    try{
        const newProduct = await ProductModel.create({id, category, license, product_name, product_no, product_description, price, picture1, picture2});
        req.json(newProduct)
    }catch(error){
        res.status(500).send(error)
    }
})

//get all
app.get('/',async (req,res)=>{
    try {
        const products = await ProductModel.find()
        res.json(products)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    // res.send('hello world')
})

app.listen(8000,()=>{
    console.log("listening to port http://localhost:8000/")
})





















//get all
// app.get('/',async (req,res)=>{
//     try {
//         const products = await Product.find()
//         res.json(products)
//     } catch (err){
//         res.status(500).json({message: err.message})
//     }
//     // res.send('hello world')
// })

// create 
// app.get('/add',async(req,res)=>{
//     const product = new Product({
//         category: req.body.category,
//         license: req.body.license,
//     })
//     try{
//         const newProduct = await product.save()
//         res.status(201).json(newProduct)
//     }catch(err){
//         res.status(400).json({message: err.message})
//     }
//     // res.send('hello worssld')
// })



// app.get('/test', (req, res) => {
//     res.send('hello world')
// })


 

 