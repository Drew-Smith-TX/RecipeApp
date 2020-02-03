import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../receipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }
  @Output() recipeSelected = new EventEmitter<void>();
  ngOnInit() {
  }
  onSelected() {
    console.log('recipe was emitted in item');
    this.recipeSelected.emit();
  }
}
