import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/woman/product.model';
import { ProductService } from 'src/app/woman/product.service';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.css']
})
export class WomanListComponent implements OnInit,OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log ('from woman-list.subscription', this.products)
      }
    );
    this.products = this.productService.getProducts();
  }

  onNewProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


