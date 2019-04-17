import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import Ingredients from '../../shared/ingredients.model';
import {ShoppingService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredients>();
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
  }

  addShoppingItem(nameInput: HTMLInputElement) {
    const newIngredient = new Ingredients(nameInput.value, this.amountInput.nativeElement.value);
    this.shoppingService.addedIngredient(newIngredient);
  }

}
