class PaymentService {
    constructor(stripeService) {
      this.stripeService = stripeService;
    }
  
    async createPaymentIntent(amount, currency, paymentMethod) {
      try {
        const paymentIntent = await this.stripeService.stripe.paymentIntents.create({
          amount,
          currency: currency || this.stripeService.config.currency,
          payment_method: paymentMethod,
        });
        return paymentIntent;
      } catch (error) {
        throw new Error(`Error creating payment intent: ${error.message}`);
      }
    }
  
    async capturePaymentIntent(paymentIntentId) {
      try {
        const paymentIntent = await this.stripeService.stripe.paymentIntents.capture(paymentIntentId);
        return paymentIntent;
      } catch (error) {
        throw new Error(`Error capturing payment intent: ${error.message}`);
      }
    }

    async retrievePaymentIntent(paymentIntentId) {
      try {
        const paymentIntent = await this.stripeService.stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent;
      } catch (error) {
        throw new Error(`Error retrieving payment intent: ${error.message}`);
      }
    }

    async confirmPaymentIntent(paymentIntentId) {
      try {
        const paymentIntent = await this.stripeService.stripe.paymentIntents.confirm(paymentIntentId);
        return paymentIntent;
      } catch (error) {
        throw new Error(`Error confirming payment intent: ${error.message}`);
      }
    }

    async cancelPaymentIntent(paymentIntentId) {
      try {
        const paymentIntent = await this.stripeService.stripe.paymentIntents.cancel(paymentIntentId);
        return paymentIntent;
      } catch (error) {
        throw new Error(`Error canceling payment intent: ${error.message}`);
      }
    }
  
    async getPaymentMethod(paymentMethodId) {
      try {
        const paymentMethod = await this.stripeService.stripe.paymentMethods.retrieve(paymentMethodId);
        return paymentMethod;
      } catch (error) {
        throw new Error(`Error retrieving payment method: ${error.message}`);
      }
    }

    async createPaymentMethod(paymentMethod) {
      try {
        const newPaymentMethod = await this.stripeService.stripe.paymentMethods.create(paymentMethod);
        return newPaymentMethod;
      } catch (error) {
        throw new Error(`Error creating payment method: ${error.message}`);
      }
    }
  }
  
  module.exports = PaymentService;
