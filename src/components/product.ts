import { Price, Product } from "../interfaces/productInterface";

// 123,12 zł
// $ 123.12
// € 123.12
const DISPLAY_CURRENCY = {
  PLN: { prefix: '', suffix: ' zł', separator: ',' },
  EUR: { prefix: '€ ', suffix: '', separator: '.' },
  USD: { prefix: '$ ', suffix: '', separator: '.' }
}

function formatPrice(price: Price) {
  const currencySettings = DISPLAY_CURRENCY[price.currency];
  const formattedAmount = price.amount.replace('.', currencySettings.separator);

  return `${currencySettings.prefix}${formattedAmount}${currencySettings.suffix}`;
}

export function renderProduct(product: Product) {
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
