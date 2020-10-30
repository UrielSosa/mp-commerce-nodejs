const mercadopago = require('mercadopago');
const mp = require('./MercadoPagoController');

mercadopago.configure({
    access_token: process.env.PROD_ACCESS_TOKEN,
    integrator_id: process.env.INTEGRATOR_ID
});

module.exports = {
    home: (req,res) => {
        res.render('home');
    },
    detail: async (req,res) => {
        let preference = mp.createPreference(req);
        
        try {
            let res = mercadopago.preferences.create(preference);

            let data = res.body;
            res.render('detail', {...req.query, data});

        }catch (e) {
            throw new Error(`${e.name} : ${e.message}`);
        }
    },
    success: (req, res) => res.render('home', { ...req.query, status: 'success', success:true }),
    failure: (req, res) => res.render('home', { status: 'failure' }),
    pending: (req, res) => res.render('home', { status: 'pending' }),
    notifications: (req,res) => {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            console.log(body);
            return res.status(200);
        }else {
            return res.status(500);
        }
    }
}