import Recipe from '../recipes/recipe.modal';
import { Injectable} from '@angular/core';
import Ingredients from '../shared/ingredients.model';
import {ShoppingService} from './shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Rice',
      'this is a recipe desc',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredients('Rice', 150),
        new Ingredients('Cooking oil', 190)
      ]
    ),
    new Recipe(
      'Chapati',
      'this is a recipe desc',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredients('Floor', 100),
        new Ingredients('Cooking oil', 190)
      ]
    )
  ];
  constructor(private slServices: ShoppingService) {}

  getRecipes = () => this.recipes.slice();

  addToShoppingList(ingredients: Ingredients[]) {
    this.slServices.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
