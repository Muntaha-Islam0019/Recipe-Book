import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Zoodle',
      'This is made with Zucchini',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759501/zucchini-kb-main-210810.jpg',
      [
        new Ingredient('Zucchini', 20),
        new Ingredient('Noodles', 20),
        new Ingredient('Cucumber', 5),
      ]
    ),
    new Recipe(
      'Bean & Beef Chili',
      'This is made with Bean and Beef',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_39/1611689/fall-recipes-te-main-200921.jpg',
      [
        new Ingredient('Beans', 30),
        new Ingredient('Beef', 50),
        new Ingredient('Chili', 10),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
