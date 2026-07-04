import { Component, inject } from '@angular/core';
import { AddGifService } from '../add-gif-service/add-gif.service';
import {
  MatSidenavModule
 } from '@angular/material/sidenav';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [MatSidenavModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  addGifService: AddGifService = inject(AddGifService);
}
