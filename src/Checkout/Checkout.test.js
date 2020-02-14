import Checkout from './Checkout';
import pricingRules from './pricingRules';
import productDefaults from './productDefaults';

describe('Checkout class unit tests ->', () => {
  it('Should update discounts in bulk', () => {
    let co = new Checkout(pricingRules, productDefaults);
    co.updateDiscounts();
    console.log('Discounts ->', co);
  });
});
