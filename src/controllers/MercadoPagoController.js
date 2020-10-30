const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: process.env.PROD_ACCESS_TOKEN
});


module.exports = {
    home: (req,res) => {
        res.render('home');
    },
    detail: (req,res) => {
        let product = req.query;
        res.render('detail', {product});
    }
}