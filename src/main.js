const productListingElement = document.getElementById('product-listing');

getProductList().products
  .map(product => renderProduct(product))
  .forEach(html => productListingElement.innerHTML += html);
