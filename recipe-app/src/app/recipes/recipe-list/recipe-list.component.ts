import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Sheppards Pie", "Basically potato and mince", "https://live.staticflickr.com/5167/5302298930_edb4b41796_b.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
