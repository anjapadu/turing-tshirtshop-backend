import models from '@models';
import Stripe from '../../../../lib/Stripe'
import nodemailer from 'nodemailer';
//lyance_test
import moment from 'moment';
//ferret12345

export async function createOrder(parentData, data, _, __) {
    if (!_.user) {
        throw new Errow("AUTHORIZATION_ERROR");
    }


    const {
        address_1,
        address_2,
        city,
        country,
        name,
        postal_code,
        region,
        shipping_region_id,
        total_amount,
        comments,
        detail,
        shipping_id,
        tax_id,
        customer_id,
        card
    } = data;

    const { number, exp_month, exp_year, cvc } = card;

    const stripe = new Stripe();
    const token = await stripe.createPaymentMethod({
        type: "card",
        card: {
            number,
            exp_month: parseInt(exp_month),
            exp_year: parseInt(exp_year),
            cvc
        }
    })
    const intent = {
        amount: total_amount.toFixed(2).replace(/\,|\./g, ''),
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method: token.id
    }
    const paymentIntent = await stripe.createPaymentIntent(intent);
    const confirmationPayment = await stripe.confirmPayment(paymentIntent.id)

    if (confirmationPayment.status === 'succeeded') {
        const insertQuery = await models.orders.create({
            total_amount,
            created_on: models.Sequelize.fn('NOW'),
            customer_id: _.user.id,
            shipping_id,
            reference: confirmationPayment.id
        }, {
                raw: true
            })
        let response = insertQuery.get({ plain: true })
        const responseDetail = await models.order_detail.bulkCreate(detail.map(item => ({ ...item, oreder_id: response.id })), { returning: true })

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yancetest2019@gmail.com',
                pass: 'ferret12345'
            }
        });
        const { email } = await models.customer.findOne({
            attributes: ['email'],
            where: {
                id: _.user.id
            },
            raw: true
        })
        const mailOptions = {
            from: 'lyance_test@gmail.com', // sender address
            to: email, // list of receivers
            subject: `Your order from ${moment().format('DD-MM-YYYY @ HH:mm')}`, // Subject line
            html: '<p>Order confirmed!!!</p>'// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });

        if (responseDetail) {
            return {
                id: response.id
            }
        }
    } else {
        throw new Error("PAYMENT_FAILED")
    }


}