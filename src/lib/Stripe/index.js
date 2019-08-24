const stripe = require('stripe');

class Stripe {
    constructor() {
        this.stripe = stripe('sk_test_============================');
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
    async updatePaymentIntent(paymentIntentId, order_id) {
        try {
            return await this.stripe.paymentIntents.update(paymentIntentId, {
                metadata: {
                    order_id: `${order_id}`
                }
            })
        } catch (e) {
            throw new Error("ERROR_UPDATING_METADATA", e);
        }
    }
}

export default Stripe;