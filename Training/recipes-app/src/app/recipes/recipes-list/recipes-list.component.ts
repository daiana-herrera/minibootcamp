import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe [] = [    
new Recipe('A test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.EvySptrtiHdBbHBxqauQsgHaFj?pid=ImgDet&rs=1'),
new Recipe('A test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.EvySptrtiHdBbHBxqauQsgHaFj?pid=ImgDet&rs=1'),new Recipe('A test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.EvySptrtiHdBbHBxqauQsgHaFj?pid=ImgDet&rs=1'),new Recipe('A test recipe', 'this is a simple test','https://th.bing.com/th/id/OIP.EvySptrtiHdBbHBxqauQsgHaFj?pid=ImgDet&rs=1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
