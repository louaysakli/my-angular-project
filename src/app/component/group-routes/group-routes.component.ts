import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ParentComponent } from '../../parent/parent.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-group-routes',
  standalone: true,
  imports: [RouterModule, NavbarComponent,ParentComponent,FooterComponent],
  templateUrl: './group-routes.component.html',
  styleUrl: './group-routes.component.scss',
})
export class GroupRoutesComponent {}
