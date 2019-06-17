import {Component, OnDestroy, OnInit} from '@angular/core';
import Ingredients from '../shared/ingredients.model';
import {ShoppingService} from '../services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private subscription: Subscription;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged
      .subscribe((ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
