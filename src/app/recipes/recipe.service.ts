import { EventEmitter, Injectable } from '@angular/core';
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
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759501/zucchini-kb-main-210810.jpg'
    ),
    new Recipe(
      'Bean & Beef Chili',
      'This is made with Bean and Beef',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_39/1611689/fall-recipes-te-main-200921.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
