import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentPage = 'Menu';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updatePageName();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  updatePageName() {
    const currentRoute = this.router.url.split('/').pop();
    switch (currentRoute) {
      case 'settings':
        this.currentPage = 'Settings';
        break;
      case 'module1':
        this.currentPage = 'Module #1';
        break;
      case 'module2':
        this.currentPage = 'Module #2';
        break;
      case 'module3':
        this.currentPage = 'Module #3';
        break;
      default:
        this.currentPage = 'Settings';
    }
  }
}
