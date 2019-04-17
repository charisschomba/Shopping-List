import {Component, Input, OnInit} from '@angular/core';
import Recipe from '../recipe.modal';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
  }

  toShoppingList() {
    this.recipeServices.addToShoppingList(this.recipe.ingredients);
  }

}
