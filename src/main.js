const productListingElement = document.getElementById('product-listing');

getProductList()
  .then(response => {
    response.products
    .map(product => renderProduct(product))
    .forEach(html => productListingElement.innerHTML += html);
  })


