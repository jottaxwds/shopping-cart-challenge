import Checkout from './Checkout';
import pricingRules from './pricingRules';
import productDefaults from './productDefaults';

// Mocks:
import {
  defaultMockDiscounts,
  mockWithItemsSummary,
  mockWithItemsDiscounts
} from './__mocks__/defaultMocks';

import { oneTshirtSummaryMock } from './__mocks__/scanMocks';

describe('Checkout unit test: ->', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('Discount bulk updates with default Summary', function test() {
    this.checkout = new Checkout(pricingRules, productDefaults);
    this.checkout.updateDiscounts();
    it('Should update discounts in bulk for all products in summary for default products', () => {
      expect(this.checkout.discounts).toEqual(defaultMockDiscounts);
    });
  });

  describe('Discount bulk updates with altered Summary', function test() {
    this.checkout = new Checkout(pricingRules, mockWithItemsSummary);
    this.checkout.updateDiscounts();
    it('Should update discounts in bulk for all products in summary', () => {
      expect(this.checkout.discounts).toEqual(mockWithItemsDiscounts);
    });
  });

  describe('Scan:', function test() {
    const tshirtCode = 'X7R2OPX';
    this.checkout = new Checkout(pricingRules, productDefaults);
    this.checkout.scan(tshirtCode);

    it('Should add 1 item with code X7R2OPX (T-Shirt) to summary:', () => {
      expect(this.checkout.summary).toEqual(oneTshirtSummaryMock);
    });

    it('Should return 20.00 as totalSummary price:', () => {
      expect(this.checkout.totalSummary).toEqual(20.0);
    });

    it('Should return 0 as totalDiscount:', () => {
      expect(this.checkout.totalDiscounts).toEqual(0);
    });

    it('Should return 20.00 as total after apply discounts:', () => {
      expect(this.checkout.total).toEqual(20.0);
    });

    it('Should return 1 item in totalSummaryItems:', () => {
      expect(this.checkout.totalSummaryItems).toEqual(1);
    });
  });
});
