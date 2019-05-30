import Ingredients from '../shared/ingredients.model';
import {Subject} from 'rxjs';

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredients[] = [
    new Ingredients('rice', 40),
    new Ingredients('milk', 20),
  ];

  getIngredient = (index: number) => this.ingredients[index]

  getIngredients = () => this.ingredients.slice();

  addedIngredient = (ingredient: Ingredients) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients = (ingredients: Ingredients[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredients(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  }
