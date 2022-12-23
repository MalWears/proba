import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.server';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeProduct();
  }
  onFetchData() {
    this.dataStorageService.fetchProduct();
  }
}
