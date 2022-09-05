import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe [] = [    
new Recipe('A test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.Re8FcdH8gx_bTC2RcVfFCAHaHa?pid=ImgDet&rs=1'),
new Recipe('Another test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.Re8FcdH8gx_bTC2RcVfFCAHaHa?pid=ImgDet&rs=1')
];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
