module.exports = {
    createPreference: function (req) {
        let items = this.createItem(req);
        let payer = this.createPayer();
        let payment_methods = this.createPayment();
        let back_urls = this.createBackUrls(req)

        return {
            items,
            payer,
            payment_methods,
            back_urls,
            auto_return: 'approved',
            notification_url: this.uri(req)+'/notifications?source_news=webhooks',
            external_reference: 'sosa.uriel1999@gmail.com'
        }
        
    },
    createItem: function (req) {
        let { title, price, unit, img } = req.query;
        let picture_url = this.uri(req) + img;

        return [
            {
                id: 1234,
                title,
                description: 'Dispositivo móvil de Tienda e-comerce',
                picture_url,
                quantity: Number(unit),
                unit_price: Number(price)
            }
        ];
    },
    createPayer: function () {
        return {
            id: 471923173,
            name: 'Lalo',
            surname: 'Landa',
            email: 'test_user_63274575@testuser.com',
            phone: {
                area_code: '11',
                number: 22223333
            },
            identificarion: {
                type: 'DNI',
                number: 12345678
            },
            address: {
                street_name: 'false',
                street_number: 123,
                zip_code: '1111',
            }
        }
    },
    createPayment: function () {
        return {
            excluded_payment_methods: [{ id: 'amex' }],
            excluded_payment_types: [{ id: 'atm' }],
            installments: 6
        }
    },
    uri: function(req) {
        return `${req.protocol}://${req.get('host')}`;
    },
    createBackUrls: function (req) {
        return {
            success: this.uri(req) + '/success',
            failure: this.uri(req) + '/failure',
            pending: this.uri(req) + '/pending',
        }
    }
}