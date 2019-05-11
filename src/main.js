const productListingElement = document.getElementById('product-listing');

const response = getProductList();

response.products
  .map(product => renderProduct(product))
  .forEach(html => productListingElement.innerHTML += html);
