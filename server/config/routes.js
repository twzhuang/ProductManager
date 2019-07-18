const mongoose = require('mongoose');
const path = require('path');
const products = require('../controllers/products.js');

module.exports = function(app){
    app.post('/productlists', function(req, res){
        products.addProduct(req, res);
    }),

    app.get('/productlists', function(req, res){
        products.getProducts(req, res);
    }),

    app.get('/productlists/:id', function(req, res){
        products.getProduct(req, res);
    }),

    app.put('/productlists/:id', function(req, res){
        products.updateProduct(req, res);
    }),

    app.delete('/productlists/:id', function(req, res){
        products.deleteProduct(req, res);
    })

    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
