import { Component, OnInit, Input } from '@angular/core';


import { Product } from 'src/app/woman/product.model';


@Component({
  selector: 'app-woman-item',
  templateUrl: './woman-item.component.html',
  styleUrls: ['./woman-item.component.css']
})
export class WomanItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  ngOnInit() {
  }
}
