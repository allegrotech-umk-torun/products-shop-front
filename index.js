define("interfaces/productInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("components/product", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.renderProduct = renderProduct;
});
define("services/search-service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function searchByName(phrase, productList) {
        return productList
            .filter(product => product.name.toLowerCase().includes(phrase.toLowerCase()));
    }
    exports.searchByName = searchByName;
});
define("services/shop-service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getProductList() {
        return {
            "products": [
                {
                    "id": "product-id-1",
                    "name": "Krzesło",
                    "price": {
                        "amount": "45.99",
                        "currency": "PLN"
                    },
                    "description": {
                        "text": "Bardzo wygodne krzesło"
                    },
                    "image": {
                        "url": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    }
                },
                {
                    "id": "product-id-2",
                    "name": "Notatnik",
                    "price": {
                        "amount": "9.00",
                        "currency": "EUR"
                    },
                    "description": {
                        "text": "Notatnik w którym można pisać ołówkiem. Długopisem też."
                    },
                    "image": {
                        "url": "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80"
                    }
                },
                {
                    "id": "product-id-3",
                    "name": "Kamień",
                    "price": {
                        "amount": "1000.00",
                        "currency": "PLN"
                    },
                    "description": {
                        "text": "Skała spoista, zwięzła bez względu na jej rodzaj genetyczny, wielkość frakcji i skład mineralogiczny."
                    },
                    "image": {
                        "url": "https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    }
                },
                {
                    "id": "product-id-4",
                    "name": "Drzewo",
                    "price": {
                        "amount": "544.89",
                        "currency": "USD"
                    },
                    "description": {
                        "text": "Na całym świecie rośnie obecnie około 3 bilionów 40 miliardów drzew."
                    },
                    "image": {
                        "url": "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    }
                },
                {
                    "id": "product-id-5",
                    "name": "Kwiatek",
                    "price": {
                        "amount": "22.00",
                        "currency": "PLN"
                    },
                    "description": {
                        "text": "Kwiatek, potrafi rosnąć."
                    },
                    "image": {
                        "url": "https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2390&q=80"
                    }
                }
            ]
        };
    }
    exports.getProductList = getProductList;
});
define("main", ["require", "exports", "components/product", "services/search-service", "services/shop-service"], function (require, exports, product_js_1, search_service_js_1, shop_service_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const productListingElement = document.getElementById('product-listing');
    const searchInputElement = document.getElementById('search-input');
    const searchButtonElement = document.getElementById('search-button');
    function renderListing(productList) {
        productListingElement.innerHTML = '';
        productList
            .map(product => product_js_1.renderProduct(product))
            .forEach(html => productListingElement.innerHTML += html);
    }
    function performSearch() {
        const phrase = searchInputElement.value;
        const results = search_service_js_1.searchByName(phrase, shop_service_js_1.getProductList().products);
        renderListing(results);
    }
    searchInputElement.addEventListener('keypress', (event) => {
        if (event.key === 'Enter')
            performSearch();
    });
    searchButtonElement.addEventListener('click', () => performSearch());
    renderListing(shop_service_js_1.getProductList().products);
});
