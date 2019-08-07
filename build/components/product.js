const DISPLAY_CURRENCY = {
    PLN: { prefix: '', suffix: ' zł', separator: ',' },
    EUR: { prefix: '€ ', suffix: '', separator: '.' },
    USD: { prefix: '$ ', suffix: '', separator: '.' }
};
function formatPrice(price) {
    const currencySettings = DISPLAY_CURRENCY[price.currency];
    const formattedAmount = price.amount.replace('.', currencySettings.separator);
    return `${currencySettings.prefix}${formattedAmount}${currencySettings.suffix}`;
}
export function renderProduct(product) {
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
