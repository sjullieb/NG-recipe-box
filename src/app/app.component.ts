import { Component } from '@angular/core';
import { Recipe } from './models/recipe.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  borshIngs: string[] = ['beetroot', 'meat'];
  borshDescr: string = 'Wash and cook!';
  recipeBox: Recipe[] = [
    new Recipe("Borsh", this.borshIngs, this.borshDescr),
    new Recipe("Oliv'e salad", ["Mayo", "Peas", "Potato"], "Cut, add mayo, eat!")
  ]

  
}
