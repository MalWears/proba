import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { ProductService } from "../woman/product.service";
import { Product } from "../woman/product.model";


@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor( private http: HttpClient, 
                 private productService: ProductService) {}

    storeProduct() {
        const products = this.productService.getProducts();
        this.http.
          put(
            'https://mal-wears-default-rtdb.europe-west1.firebasedatabase.app/products.jcon', 
            products
        )
        .subscribe( response =>{
            console.log(response)
        });
    }

    fetchProduct() {
        this.http
            .get<Product[]>(
                'https://mal-wears-default-rtdb.europe-west1.firebasedatabase.app/products.jcon'
            )
            .pipe(
                map(products =>{
                    return products.map(product =>{
                        return{
                            ...product
                        };
                    });
                })
            )
            .subscribe(products =>{
                this.productService.setProducts(products);
            });
    }
}