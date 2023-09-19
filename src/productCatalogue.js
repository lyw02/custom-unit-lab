class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function (product) {
      const position = product.name.search(subString)
      return position !== -1
    })
    return matches;
  }

  removeProductById(id) {
    if (this.findProductById(id)) {
      this.products = this.products.filter(product => product.id != id)
      return true;
    }
    return false;
  }
}
module.exports = Catalogue;
