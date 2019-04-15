import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import Ingredients from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }

  addShoppingItem(nameInput: HTMLInputElement) {
    const newIngredient = new Ingredients(nameInput.value, this.amountInput.nativeElement.value);
    this.IngredientAdded.emit(newIngredient);
  }

}
