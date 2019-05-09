import Recipe from '../recipes/recipe.modal';
import {EventEmitter, Injectable} from '@angular/core';
import Ingredients from '../shared/ingredients.model';
import {ShoppingService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
}
