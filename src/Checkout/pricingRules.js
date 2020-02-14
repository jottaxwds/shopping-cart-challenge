/**
 * Pricing Rules: Information about what discounts can be applicable depending on
 * the given items and providing discount information results.
 */
const pricingRules = [
  {
    id: '2x1',
    applicableTo: ['X3W2OPY'],
    getDiscount: ({ quantity, priceUnit, name, code }) => {
      let discount = 0;
      if (quantity > 0) {
        discount = parseInt(quantity / 2) * priceUnit;
      }
      return {
        discountId: `2x1-${code}`,
        description: `2x1 ${name} offer`,
        discount
      };
    }
  },
  {
    id: 'x3',
    applicableTo: ['X7R2OPX'],
    getDiscount: ({ quantity, priceUnit, name, code }) => {
      let discount = 0;
      if (quantity >= 3) {
        discount = quantity * priceUnit * 0.05;
      }
      return {
        discountId: `x3-${code}`,
        description: `x3 ${name} offer`,
        discount
      };
    }
  },
  {
    id: 'promoCode',
    applicableTo: ['ALL'],
    getDiscount: () => {
      let discount = 0;
      return { discountId: `promoCode`, description: `Promo Code`, discount };
    }
  }
];

export default pricingRules;
