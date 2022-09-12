import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-editors-panel',
  templateUrl: './editors-panel.component.html',
  styleUrls: ['./editors-panel.component.css']
})
export class EditorsPanelComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;
  selectedIndex = 1;

  ngOnInit() {
      this.items = [
          {label: 'Add Product', command: () => this.changeIndex(1) },
          {label: 'Delete Product', command: () => this.changeIndex(2) },
          {label: 'Editor\' Picks', command: () => this.changeIndex(3) },
      ];

      this.activeItem = this.items[0];
  }


  public create(): void {

  }

  private changeIndex(id) {
    this.selectedIndex = id
  }
}
