const express = require('express');

const router = express.Router();

router.post('/contact',function (req,res) {

    var newProduct = new Product();
    newProduct.Name = req.body.Name;
    newProduct.Cost = req.body.Cost;
    newProduct.Warranty = req.body.Warranty;
    newProduct.Image = req.body.Image;
    newProduct.Expiry = req.body.Expiry;
    newProduct.save(function (err,insertedProduct) {
        if(err){
            console.log('err'+err);
        }else{
            res.json(insertedProduct);
        }
    });
});


module.exports = router;