const { expect } = require('chai');
const StripeService = require('../src/stripeService.js');

describe('StripeService', () => {
  let stripeService;

  beforeEach(() => {
    // Mocking the Stripe service
    const stripe = {
      Stripe: class {
        constructor(apiKey, options) {
          this.apiKey = apiKey;
          this.options = options;
        }
      }
    };
    stripeService = new StripeService('secret_key', {apiVersion: '2023-10-16'});
  });

  describe('constructor', () => {
    it('should create an instance of StripeService with valid API key', () => {
      expect(stripeService.apiKey).to.equal('secret_key');
      expect(stripeService.config).to.deep.equal({apiVersion: '2023-10-16'});
    });
  });

  describe('setCurrency', () => {
    it('should set the default currency', () => {
      stripeService.setCurrency('eur');
      expect(stripeService.getCurrency()).to.equal('eur');
    });
  });

  // Add more tests for other methods as needed
});
