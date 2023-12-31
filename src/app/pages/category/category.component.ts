import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryId: string | null = null
  products: Product[] = []

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id')
        if(this.categoryId) {
          return this.productsService.getProductsByCateogory(this.categoryId)
        }
        return[]
      })
    )
    .subscribe((data) => {
      this.products = data
    })
  }
}
