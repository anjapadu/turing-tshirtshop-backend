import models from '@models';
import Stripe from '../../../../lib/Stripe'

export async function createOrder(parentData, data, _, __) {
    const {
        total_amount,
        comments,
        detail,
        shipping_id,
        tax_id,
        customer_id
    } = data;

    const stripe = new Stripe();
    const token = await stripe.createPaymentMethod({
        type: "card",
        card: {
            number: '4242424242424242',
            exp_month: 12,
            exp_year: 2020,
            cvc: '123'
        }
    })

    const intent = {
        amount: 2000,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method: token.id
    }
    const paymentIntent = await stripe.createPaymentIntent(intent);


    const confirmationPayment = await stripe.confirmPayment(paymentIntent.id)

    console.log({ confirmationPayment })
    if (confirmation.status === 'succeeded') {

    }


    return {
        comments: confirmationPayment.id
    }

}