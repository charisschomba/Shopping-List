import {Component, OnInit} from '@angular/core';
import Recipe from '../recipe.modal';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeServices: RecipeService,
    private route: ActivatedRoute,
    private  router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeServices.getRecipe(this.id);
        }
      );
  }
  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  toShoppingList() {
    this.recipeServices.addToShoppingList(this.recipe.ingredients);
  }

}
