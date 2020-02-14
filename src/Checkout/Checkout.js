class Checkout {
  _products;
  _summary;
  _totalPrice;

  constructor(pricingRules, productDefaults) {
    this._pricing = pricingRules;
    this._summary = productDefaults;
    this._discounts = [];
    this._totalSummaryItems = 0;
    this._totalDiscounts = 0;
    this._totalSummary = 0;
    this._totalPrice = 0;
  }

  get totalSummaryItems() {
    return this._totalSummaryItems;
  }

  get totalSummary() {
    return this._totalSummary;
  }

  get totalDiscounts() {
    return this._totalDiscounts;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  get summary() {
    return this._summary;
  }

  get discounts() {
    return this._discounts;
  }

  /**
   * Method to get the product by given code:
   * @param {String} inputCode
   */
  getProductByCode(inputCode) {
    if (this._summary && Array.isArray(this._summary)) {
      const product = this._summary.filter(({ code }) => code === inputCode);
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
      newSummary[index].quantity = product.quantity;
    } else {
      newSummary.push(product);
    }
    this._summary = newSummary;
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
   * Method that check discounts for new product added to summary
   * It calculates the discount (if any) for this item in summary
   * and returns the discounts
   * @param {Object} {quantity, priceUnit, name} product values in summary
   * @returns {Array} Discounts for product in summary
   */
  checkDiscounts({ quantity, priceUnit, name, code }) {
    let discounts = this._pricing.reduce(
      (result, { applicableTo, getDiscount }) => {
        if (applicableTo.includes(code)) {
          const discount = getDiscount({ quantity, priceUnit, name, code });
          result.push(discount);
        }
        return result;
      },
      []
    );
    return discounts;
  }

  /**
   * Method to update current discounts based on
   * new item added to summary.
   * @param {String} code
   * @param {Object} summaryProduct Summary product updated after add/remove
   */
  updateDiscountsByProduct(code, summaryProduct) {
    let currentDiscounts = [...this._discounts];
    const { quantity, priceUnit, name, code: sCode } = summaryProduct;
    let newDiscountsToApply = this.checkDiscounts({
      quantity,
      priceUnit,
      name,
      code: sCode
    });

    // Replace discounts by new ones:
    let newDiscounts = newDiscountsToApply.map(
      obj => currentDiscounts.find(o => o.discountId === obj.discountId) || obj
    );

    this._discounts = newDiscounts;
  }

  /**
   * Bulk update of the discounts:
   */
  updateDiscounts() {
    let summary = [...this._summary];
    summary.forEach(product => {
      this.updateDiscountsByProduct(product.code, product);
    });
  }

  /**
   * Method to update current total in summary
   */
  updateTotalSummary() {
    let newTotal = this._summary.reduce((total, { priceUnit, quantity }) => {
      total = total + priceUnit * quantity;
      return total;
    }, 0);
    this._totalSummary = newTotal;
  }

  /**
   * Method to update current total of applied discounts.
   */
  updateTotalDiscounts() {
    let newTotal = this._discounts.reduce((total, { discount }) => {
      total = total + discount;
      return total;
    }, 0);
    this._totalDiscounts = newTotal;
  }

  /**
   * Method to update current total to pay (totalSummary - totalDiscounts)
   */
  updateTotalPrice() {
    this._totalPrice = this._totalSummary - this._totalDiscounts;
  }

  /**
   * Method to update total items puchased (in summary)
   */
  updateTotalSummaryItems() {
    this._totalSummaryItems = this._summary.length;
  }

  /**
   * Method to update all totals by current summary & discounts
   */
  updateAllTotals() {
    this.updateTotalSummary();
    this.updateTotalDiscounts();
    this.updateTotalPrice();
    this.updateTotalSummaryItems();
  }

  /**
   * Method to add products to summary:
   * @param {String} code
   */
  scan(code) {
    const product = this.getProductByCode(code);
    if (product) {
      // Update
      product.quantity = product.quantity + 1;
      this.addProductToSummary(product);
      this.updateDiscountsByProduct(code, product);
      // Updating totals:
      this.updateAllTotals();
    } else {
      console.log(
        `Error: Product with code ${code} was not found inside available products list`
      );
    }
    // Return for next step
    return this;
  }

  /**
   * Method to remove items from summary:
   * @param {String} code
   */
  unScan(code) {
    const product = this.getProductByCode(code);
    if (product) {
      // Update Summary & discounts info:
      product.quantity = product.quantity - 1;
      this.addProductToSummary(product);
      this.updateDiscountsByProduct(code, product);
      // Updating totals:
      this.updateAllTotals();
    } else {
      console.log(
        `Error: Product with code ${code} was not found inside available products list`
      );
    }
    // Return for next step
    return this;
  }
}

export default Checkout;
