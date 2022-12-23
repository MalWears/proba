import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './product.model';

@Injectable()
export class ProductService {


  productsChanged = new Subject<Product[]>();

  private products: Product[] = [];
  //   new Product(
  //     'Топік з шортиками',
  //     'Літній легкий костюмчик!',
  //     'https://ltdfoto.ru/images/2022/12/23/bsh1.jpg',
  //     '500 грн'
  //     ),
  //   new Product(
  //     'Костюм "Гусяча Лапка"',
  //     'Найпопулярніший костюм став ще кращий',
  //     'https://ltdfoto.ru/images/2022/12/23/g1.jpg',
  //     '1000 грн',
  //     )
  // ];

  constructor( ) {}

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product){
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  updateProduct(index:number, newProduct:Product){
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }
  deleteProduct(index:number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice())
  }
}
