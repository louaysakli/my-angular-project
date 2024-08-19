import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isExpanded = false;
  isMenuVisible = false; 
  isCatalogueVisible = true;
  
  constructor(private cdr: ChangeDetectorRef) {}

  toggleCatalogue() {
    this.isCatalogueVisible = !this.isCatalogueVisible;
    this.cdr.detectChanges();
  }

  toggleDiv() {
    this.isExpanded = !this.isExpanded;
    // Trigger change detection manually if needed
  }



  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.cdr.detectChanges(); // Ensure change detection runs if needed
  }
}
