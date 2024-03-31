class CustomerService {
    constructor(stripeService) {
      this.stripeService = stripeService;
    }
  
    async createCustomer(email, metadata) {
      try {
        const customer = await this.stripeService.stripe.customers.create({
          email,
          metadata,
        });
        return customer;
      } catch (error) {
        throw new Error(`Error creating customer: ${error.message}`);
      }
    }

    async getCustomer(customerId) {
      try {
        const customer = await this.stripeService.stripe.customers.retrieve(customerId);
        return customer;
      } catch (error) {
        throw new Error(`Error getting customer: ${error.message}`);
      }
    }

    async updateCustomer(customerId, data) {
      try {
        const customer = await this.stripeService.stripe.customers.update(customerId, data);
        return customer;
      } catch (error) {
        throw new Error(`Error updating customer: ${error.message}`);
      }
    }

    async deleteCustomer(customerId) {
      try {
        const deletedCustomer = await this.stripeService.stripe.customers.del(customerId);
        return deletedCustomer;
      } catch (error) {
        throw new Error(`Error deleting customer: ${error.message}`);
      }
    }

    async listCustomers(limit, startingAfter) {
      try {
        const customers = await this.stripeService.stripe.customers.list({
          limit,
          starting_after: startingAfter,
        });
        return customers.data;
      } catch (error) {
        throw new Error(`Error listing customers: ${error.message}`);
      }
    }

  }
  
  module.exports = CustomerService;
