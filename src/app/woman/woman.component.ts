import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductService } from './product.service';


@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
  providers: [ProductService]
  
})
export class WomanComponent implements OnInit {
  

  constructor
  (
    ) { }

  ngOnInit() {
  }

    
}
