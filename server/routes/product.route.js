// Node JS server routing
const express=require('express');
const productRouter = express.Router();
let Product = require('../models/Product');

// Define the routes
productRouter.route('/add').post(function(req, res){
    let product = new Product(req.body);
    product.save().then(prod => {
        res.status(200).json({'product':'Product added successfully' + prod});
    }).catch(err => {
        res.status(400).send('Unable to connect!' + err)
    });
});

// get route
productRouter.route('/').get(function(req, res){
    Product.find(function(err, product){
        if (err){
            console.log(err);
            
        }
        else{
            res.json(product);
        }
    });        
 });

// edit:id
productRouter.route('/edit/:id').get((req, res) => {
    Product.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = productRouter;