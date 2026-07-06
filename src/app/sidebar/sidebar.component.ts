import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  categories = ["New Category"];

  // constructor() {
  //   const categoriesString: string = localStorage.getItem("categories") || "[]";
  //   const initialCategories = JSON.parse(categoriesString) || [];
  //   this.categories = initialCategories;
  // }
  onAddCategory() {
    this.categories.push("New Category");
  }
}
