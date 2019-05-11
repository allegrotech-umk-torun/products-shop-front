const DISPLAY_CURRENCY = {
  PLN: 'zł',
  EUR: '€',
  USD: '$'
}

function formatPrice(price) {
  const formattedCurrency = DISPLAY_CURRENCY[price.currency];
  const formattedAmount = price.amount.replace('.', ',');
  
  return `${formattedAmount} ${formattedCurrency}`;
}

function renderProduct(product) {
  return `
  <div class="product">
    <div class="product__name">${product.name}</div>
    <div class="product__details">
      <img class="product__image" src="${product.image.url}"></img>
      <div>
        <div class="product__price">${formatPrice(product.price)}</div>
        <div class="product__description">
          ${product.description.text}
        </div>
      </div>
    </div>
  </div>
  `;
}
