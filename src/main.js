const response = getProductList();

response.products
  .map(product => renderProduct(product))
  .forEach(html => console.log(html));
