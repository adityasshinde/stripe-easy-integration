# Stripe Easy Integration

Integrate with Stripe effortlessly using this easy-to-use package.

## Installation

Install the package via npm:

```bash
npm install integrate-stripe

## Usage
Import the necessary modules:
const { StripeService, CustomerService, PaymentService, SubscriptionService } = require('integrate-stripe');

### StripeService
Initialize the StripeService with your API key:
const stripeService = new StripeService('YOUR_STRIPE_API_KEY');

Set the default currency:
stripeService.setCurrency('usd');
Get the default currency:
const currency = stripeService.getCurrency();
console.log(currency); // Output: 'usd'

Set the default payment methods:
stripeService.setPaymentMethods(['card', 'bitcoin']);
Get the default payment methods:
const paymentMethods = stripeService.getPaymentMethods();
console.log(paymentMethods); // Output: ['card', 'bitcoin']

Enable webhook and set webhook URL:
stripeService.enableWebhook('https://example.com/webhook');

Disable webhook:
stripeService.disableWebhook();

Get webhook status:
const webhookStatus = stripeService.getWebhookStatus();
console.log(webhookStatus); // Output: { enabled: true, url: 'https://example.com/webhook' }

### CustomerService

const customerService = new CustomerService(stripeService);

Create a new customer:
const customer = await customerService.createCustomer('customer@example.com', { name: 'John Doe' });

Get customer details:
const customer = await customerService.getCustomer('CUSTOMER_ID');

Update customer details:
const updatedCustomer = await customerService.updateCustomer('CUSTOMER_ID', { name: 'Jane Doe' });

Delete a customer:
const deletedCustomer = await customerService.deleteCustomer('CUSTOMER_ID');

### PaymentService
const paymentService = new PaymentService(stripeService);

Create a payment intent:
const paymentIntent = await paymentService.createPaymentIntent(1000, 'usd', 'PAYMENT_METHOD_ID');

Capture a payment intent:
const capturedPaymentIntent = await paymentService.capturePaymentIntent('PAYMENT_INTENT_ID');

Retrieve a payment intent:
const retrievedPaymentIntent = await paymentService.retrievePaymentIntent('PAYMENT_INTENT_ID');

Confirm a payment intent:
const confirmedPaymentIntent = await paymentService.confirmPaymentIntent('PAYMENT_INTENT_ID');

Cancel a payment intent:
const canceledPaymentIntent = await paymentService.cancelPaymentIntent('PAYMENT_INTENT_ID');

SubscriptionService
const subscriptionService = new SubscriptionService(stripeService);

Create a subscription:
const subscription = await subscriptionService.createSubscription('CUSTOMER_ID', 'PRICE_ID');

Cancel a subscription:
const canceledSubscription = await subscriptionService.cancelSubscription('SUBSCRIPTION_ID');

Retrieve a subscription:
const retrievedSubscription = await subscriptionService.retrieveSubscription('SUBSCRIPTION_ID');

Update a subscription:
const updatedSubscription = await subscriptionService.updateSubscription('SUBSCRIPTION_ID', { metadata: { key: 'value' } });
