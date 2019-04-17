import Ingredients from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('rice', 40),
    new Ingredients('milk', 20),
  ];
    getIngredients = () => this.ingredients.slice();

  addedIngredient = (ingredient: Ingredients) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    }

  addIngredients = (ingredients: Ingredients[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  }
