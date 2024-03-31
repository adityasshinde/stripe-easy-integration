const { expect } = require('chai');
const PaymentService = require('../src/paymentService.js');

describe('PaymentService', () => {
  let paymentService;

  beforeEach(() => {
    // Mocking the Stripe service
    const stripeService = {
      stripe: {
        paymentIntents: {
          create: () => Promise.resolve({ id: '123', amount: 1000 }),
          capture: (paymentIntentId) => Promise.resolve({ id: paymentIntentId, captured: true }),
          retrieve: (paymentIntentId) => Promise.resolve({ id: paymentIntentId, amount: 1000 }),
          confirm: (paymentIntentId) => Promise.resolve({ id: paymentIntentId, confirmed: true }),
          cancel: (paymentIntentId) => Promise.resolve({ id: paymentIntentId, canceled: true }),
        }
      }
    };
    paymentService = new PaymentService(stripeService);
  });

  describe('createPaymentIntent', () => {
    it('should create a payment intent', async () => {
      const paymentIntent = await paymentService.createPaymentIntent(1000, 'usd', 'pm_card_visa');
      expect(paymentIntent.id).to.equal('123');
    });
  });

  // Add tests for other methods like capturePaymentIntent, retrievePaymentIntent, etc.
});
