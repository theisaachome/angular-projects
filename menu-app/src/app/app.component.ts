import { Component } from '@angular/core';
import { menus, Menu } from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menus: Menu[] = menus;
  selectedCategory = 'all';

  filterItems(cat: string) {
    if (cat === 'all') {
      return this.menus;
    }
    return this.menus.filter((menu) => menu.category === cat);
  }

  getCategories() {
    return ['all', ...new Set(menus.map((item) => item.category))];
  }


}
