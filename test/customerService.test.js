const { expect } = require('chai');
const CustomerService = require('../src/customerService.js');

describe('CustomerService', () => {
  let customerService;

  beforeEach(() => {
    // Mocking the Stripe service
    const stripeService = {
      stripe: {
        customers: {
          create: () => Promise.resolve({ id: '123', email: 'test@example.com' }),
          retrieve: (customerId) => Promise.resolve({ id: customerId, email: 'test@example.com' }),
          update: (customerId) => Promise.resolve({ id: customerId, email: 'updated@example.com' }),
          del: (customerId) => Promise.resolve({ id: customerId, deleted: true }),
          list: () => Promise.resolve({ data: [{ id: '123', email: 'test@example.com' }] }),
        }
      }
    };
    customerService = new CustomerService(stripeService);
  });

  describe('createCustomer', () => {
    it('should create a customer', async () => {
      const customer = await customerService.createCustomer('test@example.com', { name: 'John Doe' });
      expect(customer.id).to.equal('123');
    });
  });

  describe('getCustomer', () => {
    it('should retrieve a customer', async () => {
      const customer = await customerService.getCustomer('123');
      expect(customer.id).to.equal('123');
    });
  });

  describe('updateCustomer', () => {
    it('should update a customer', async () => {
      const updatedCustomer = await customerService.updateCustomer('123', { email: 'updated@example.com' });
      expect(updatedCustomer.email).to.equal('updated@example.com');
    });
  });

  describe('deleteCustomer', () => {
    it('should delete a customer', async () => {
      const deletedCustomer = await customerService.deleteCustomer('123');
      expect(deletedCustomer.deleted).to.be.true;
    });
  });

  describe('listCustomers', () => {
    it('should list customers', async () => {
      const customers = await customerService.listCustomers(10, '123');
      expect(customers.length).to.equal(1);
    });
  });
});
