function renderProduct(product) {
  return `
  <div class="product">
    <div class="product__name">${product.name}</div>
    <div class="product__price">${product.price.amount}</div>
    <div class="product__description">
      ${product.description.text}
    </div>
  </div>
  `;
}
