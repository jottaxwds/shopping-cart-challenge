class Checkout {
  _products;
  _summary;
  _totalPrice;

  constructor(pricingRules, productDefaults) {
    this._pricing = pricingRules;
    this._summary = productDefaults;
    this._discounts = [];
    this._totalPrice = 0;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  set summary(summary) {
    this._summary = summary;
  }

  totalSummaryItems() {
    return this._summary.length;
  }

  _getProductByCode(inputCode) {
    if (this._products && Array.isArray(this._products)) {
      const product = this._products.filter(({ code }) => code === inputCode);
      return product && product[0];
    } else {
      return null;
    }
  }

  /**
   * Method to update the summary with the new product
   * and set the new summary.
   * @param {Object} product
   * @returns {Object} product with updated quantity
   */
  addProductToSummary(productToAdd) {
    let product = { ...productToAdd };
    let newSummary = [...this._summary];
    let index = newSummary.indexOf(({ code }) => code === product.code);
    if (index != -1) {
      newSummary[index].quantity = newSummary[index].quantity + 1;
    } else {
      product.quantity = 1;
      newSummary.push(product);
    }
    this._summary = newSummary;
    return product;
  }

  /**
   * Method to update the summary removing the product
   * and set the new summary.
   * @param {Object} product
   */
  removeProductFromSummary(productToAdd) {
    let product = { ...productToAdd };
    let newSummary = [...this._summary];
    let index = newSummary.indexOf(({ code }) => code === product.code);
    if (index != -1 && product.quantity > 0) {
      newSummary[index].quantity = newSummary[index].quantity - 1;
    }
    this._summary = newSummary;
  }

  /**
   * Method to update current discounts based on
   * new item added to summary.
   * @param {String} code
   * @param {Object} summaryProduct Summary product updated after add/remove
   */
  updateDiscounts(code, summaryProduct) {
    let currentDiscounts = this._discounts;
    const { quantity, priceUnit, name } = summaryProduct;
    let discounts = this._pricing.reduce(
      (result, { applicableTo, getDiscountByItems }) => {
        if (applicableTo.includes(code)) {
          const discount = getDiscount({ quantity, priceUnit, name });
          result.push(discount);
        }
      },
      []
    );

    // Remove existing discounts by code and add new ones:
  }

  /**
   * Method to update current total by
   * summary and applying discounts.
   */
  updateTotal() {}

  /**
   * Method to add products to summary:
   *
   */
  scan(code) {
    const product = this._getProductByCode(code);
    if (product) {
      let summaryProduct = this.addProductToSummary(product);
      this.updateDiscounts(code, summaryProduct);
      this.updateTotal();
      this.totalSummaryItems = this._summary.length;
    } else {
      console.log(
        `Error: Product with code ${code} was not found inside available products list`
      );
    }
  }
}
