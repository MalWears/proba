import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/woman/product.model';
import { ProductService } from 'src/app/woman/product.service';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.css']
})
export class WomanListComponent implements OnInit {

  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onNewProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


