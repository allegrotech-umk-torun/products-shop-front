export interface Price {
    amount: string;
    currency: 'PLN' | 'EUR' | 'USD';
}

export interface Description {
    text: string;
}

export interface Image {
    url: string;
}

export interface Product {
    id: string;
    name: string;
    price: Price;
    description: Description;
    image: Image;
}
