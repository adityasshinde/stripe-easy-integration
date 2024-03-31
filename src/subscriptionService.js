class SubscriptionService {
    constructor(stripeService) {
      this.stripeService = stripeService;
    }
  
    async createSubscription(customerId, priceId) {
      try {
        const subscription = await this.stripeService.stripe.subscriptions.create({
          customer: customerId,
          items: [{ price: priceId }],
        });
        return subscription;
      } catch (error) {
        throw new Error(`Error creating subscription: ${error.message}`);
      }
    }
  
    async cancelSubscription(subscriptionId) {
      try {
        const canceledSubscription = await this.stripeService.stripe.subscriptions.del(subscriptionId);
        return canceledSubscription;
      } catch (error) {
        throw new Error(`Error canceling subscription: ${error.message}`);
      }
    }

    async retrieveSubscription(subscriptionId) {
      try {
        const subscription = await this.stripeService.stripe.subscriptions.retrieve(subscriptionId);
        return subscription;
      } catch (error) {
        throw new Error(`Error retrieving subscription: ${error.message}`);
      }
    }

    async updateSubscription(subscriptionId, data) {
      try {
        const updatedSubscription = await this.stripeService.stripe.subscriptions.update(subscriptionId, data);
        return updatedSubscription;
      } catch (error) {
        throw new Error(`Error updating subscription: ${error.message}`);
      }
    }

}
  
module.exports = SubscriptionService;
