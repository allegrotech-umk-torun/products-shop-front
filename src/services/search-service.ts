import { Product } from "../interfaces/productInterface";

export function searchByName(phrase: string, productList: Product[]): Product[] {
  return productList
    .filter(product => product.name.toLowerCase().includes(phrase.toLowerCase()))
}
