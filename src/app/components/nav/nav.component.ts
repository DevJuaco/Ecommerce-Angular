import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  ngOnInit(): void {
    this.getAllCategories()
  }


  categories: Category[] = []
  activeMenu = false

  constructor(
    private categoriesServices: CategoriesService
  ){}

  toggleMenu() {
    this.activeMenu = !this.activeMenu
  }

  getAllCategories() {
    this.categoriesServices.getAllCategories()
      .subscribe(data => {
        this.categories = data
      })
  }
}
