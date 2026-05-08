import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  today: Date = new Date();
}
