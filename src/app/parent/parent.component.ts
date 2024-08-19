import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ProductService } from '../service/ProductService';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Ensure HttpClientModule is included here
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  products: any[] = [];

  isHidden: boolean = true;
 


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  toggleList() {
    this.isHidden =!this.isHidden;
  }
   isDropdownVisible: boolean = false;
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
