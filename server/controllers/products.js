const mongoose = require('mongoose'),
    Product = mongoose.model('Product');

module.exports = {
    getProducts: function(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log(err);
            }
            else{
                console.log(products);
                res.json(products);
            }
        })
    },

    addProduct: function(req, res){
        var product = new Product(req.body);
        product.save(function(err, product){
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(product);
                console.log("Added a product", product);
            }
        })
    },

    deleteProduct: function(req, res){
        Product.findOneAndDelete({_id: req.params.id}, function(err, product){
            if(err){
                res.json(err);
            }
            else{
                res.json(product);
            }
        })
    },

    getProduct: function(req, res){
        Product.find({_id: req.params.id}, function(err, product){
            if(err){
                console.log(err);
            }
            else{
                res.json(product[0]);
            }
        })
    },

    updateProduct: function(req, res){
        console.log(req.body);
        Product.findOneAndUpdate({_id: req.body._id}, req.body, function(err, product){
            if(err){
                console.log(err);
            }
            else{
                console.log("controllers update", product);
                res.json(product);
            }
        })
    }
};
