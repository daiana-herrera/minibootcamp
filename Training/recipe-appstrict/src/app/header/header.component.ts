import { Component } from '@angular/core';
import { DataStorangeService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
constructor(private dataStorageService: DataStorangeService){}

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
}
