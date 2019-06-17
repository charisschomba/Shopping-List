import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import Ingredients from '../../shared/ingredients.model';
import {ShoppingService} from '../../services/shopping-list.service';
import { NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f')slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(
    private shoppingService: ShoppingService,
  ) {}

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      );
  }

  addShoppingItem(form: NgForm) {
    const newIngredient = new Ingredients(form.value.name, form.value.amount);
    if (!this.editMode) { this.shoppingService.addedIngredient(newIngredient); }
    this.shoppingService.updateIngredients(this.editedItemIndex, newIngredient);
    this.editMode = false;
    form.reset();
  }
  deleteIngredint() {
    this.slForm.reset();
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
