import Ingredients from '../shared/ingredients.model';
import {Subject} from 'rxjs';

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('rice', 40),
    new Ingredients('milk', 20),
  ];
    getIngredients = () => this.ingredients.slice();

  addedIngredient = (ingredient: Ingredients) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    }

  addIngredients = (ingredients: Ingredients[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  }
