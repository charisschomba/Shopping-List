import { Component, OnInit } from '@angular/core';
import Ingredients from '../shared/ingredients.model';
import {ShoppingService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredients[]) => {
      console.log(ingredients)
    this.ingredients = ingredients;
    });
  }
}
