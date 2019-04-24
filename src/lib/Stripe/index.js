const stripe = require('stripe');

class Stripe {
    constructor() {
        this.stripe = stripe('sk_test_atNKmqivQ5ODRTAmIleFFkYi00NTfdGK5h');
    }

    async createPaymentMethod(card) {
        try {
            return await this.stripe.paymentMethods.create(card);
        } catch (e) {
            throw new Error('WRONG_CARD')
        }
    }
    async createPaymentIntent(intent) {
        try {
            return await this.stripe.paymentIntents.create(intent)
        } catch (e) {
            console.log(e)
            throw new Error("PAYMENT_FAILED")
        }
    }
    async confirmPayment(paymentIntentId) {
        try {
            return await this.stripe.paymentIntents.confirm(paymentIntentId)
        } catch (e) {
            console.log(e)
            throw new Error("PAYMENT_FAILED")
        }
    }
}

export default Stripe;