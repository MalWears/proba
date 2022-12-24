import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-woman-edit',
  templateUrl: './woman-edit.component.html',
  styleUrls: ['./woman-edit.component.css']
})
export class WomanEditComponent implements OnInit {
  id: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let productName = '';
    let productImagePath = '';
    let productDescription = '';
    let productPrice = '';

    if (this.editMode) {
      const product = this.productService.getProduct(this.id);
      productName = product.name;
      productImagePath = product.imagePath;
      productDescription = product.description;
      productPrice = product.price;
    };
  
      

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'imagePath': new FormControl(productImagePath, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'price' : new FormControl(productPrice, Validators.required)
    });
  }
}
