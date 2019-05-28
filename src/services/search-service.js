function searchByName(phrase, productList) {
  return productList
    .filter(product => product.name.toLowerCase().includes(phrase.toLowerCase()))
}
