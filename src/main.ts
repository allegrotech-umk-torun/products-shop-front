import { Product } from "./interfaces/productInterface";
import { renderProduct } from "./components/product.js";
import { searchByName } from "./services/search-service.js";
import { getProductList } from "./services/shop-service.js";

const productListingElement = document.getElementById('product-listing');
const searchInputElement = document.getElementById('search-input');
const searchButtonElement = document.getElementById('search-button');

function renderListing(productList: Product[]) {
  productListingElement.innerHTML = '';

  productList
    .map(product => renderProduct(product))
    .forEach(html => productListingElement.innerHTML += html);
}

function performSearch() {
  const phrase = (searchInputElement as HTMLInputElement).value;
  const results = searchByName(phrase, getProductList().products);
  renderListing(results);
}

searchInputElement.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') performSearch();
});
searchButtonElement.addEventListener('click', () => performSearch());

renderListing(getProductList().products);
