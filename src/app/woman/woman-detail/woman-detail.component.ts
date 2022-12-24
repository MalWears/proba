import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from 'src/app/woman/product.model';
import { ProductService } from 'src/app/woman/product.service';

@Component({
  selector: 'app-woman-detail',
  templateUrl: './woman-detail.component.html',
  styleUrls: ['./woman-detail.component.css']
})
export class WomanDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }


  onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/woman']);
  }

}
