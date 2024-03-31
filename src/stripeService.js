const Stripe = require('stripe');

class StripeService {
  constructor(apiKey, config) {
    console.log('apiKey', apiKey);
    if (!apiKey) {
      throw new Error('API Key is required');
    }
    this.apiKey = apiKey;
    this.config = config || {
      currency: 'usd',
      paymentMethods: ['card'],
      webhookEnabled: false,
      webhookUrl: '',
      apiVersion: '2023-10-16',
    };
    this.stripe = new Stripe(this.apiKey, config);
  }

  // Method to set the default currency
  setCurrency(currency) {
    this.config.currency = currency;
  }

  // Method to get the default currency
  getCurrency() {
    return this.config.currency;
  }

  // Method to set the default payment methods
  setPaymentMethods(paymentMethods) {
    this.config.paymentMethods = paymentMethods;
  }

  // Method to get the default payment methods
  getPaymentMethods() {
    return this.config.paymentMethods;
  }

  // Method to enable webhook and set webhook URL
  enableWebhook(url) {
    this.config.webhookEnabled = true;
    this.config.webhookUrl = url;
  }

  // Method to disable webhook
  disableWebhook() {
    this.config.webhookEnabled = false;
    this.config.webhookUrl = '';
  }

  // Method to get webhook status
  getWebhookStatus() {
    return {
      enabled: this.config.webhookEnabled,
      url: this.config.webhookUrl,
    };
  }
}

module.exports = StripeService;
