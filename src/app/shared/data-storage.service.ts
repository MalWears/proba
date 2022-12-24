import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { map, tap } from "rxjs/operators";

import { Product } from "../woman/product.model";
import { ProductService } from "../woman/product.service";



@Injectable({providedIn: "root"})
export class DataStorageService{
    constructor( 
        private http: HttpClient, 
        private productService: ProductService
    ) {}


    storeProducts() {
        const products = this.productService.getProducts();
        console.log('from this.storeProducts', products)
        this.http
            .put(
                "https://malwears-28e60-default-rtdb.europe-west1.firebasedatabase.app/woman.json" , 
                products
            )
            .subscribe( response =>{
             console.log(response);
            });
    }
    
    fetchProducts() {
         this.http
          .get<Product[]>(
            "https://malwears-28e60-default-rtdb.europe-west1.firebasedatabase.app/woman.json"
          ).subscribe(response =>{
            console.log(response)
          }
          );
            
        //     products  =>{
        //    this.productService.setProducts(products);
        //   });
          // .pipe(
          //   map(products => {
          //     return products.map(products => {
          //       return{
          //           ...products
          //       }
          //     });
          //   }),
          //   tap(products => {
          //     this.productService.setProducts(products);
          //   })
          // );
      }
}