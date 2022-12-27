import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 4),
    new Ingredient('Bread', 10)
  ]

  constructor() {}

  ngOnInit() {

  }
}
