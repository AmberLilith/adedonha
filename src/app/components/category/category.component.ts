import { Component } from '@angular/core';
import { Category } from '../../models/category/category';
import { GameManagerService } from '../../services/gameManager/game-manager.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category!: Category

  constructor(private gameManager: GameManagerService) { }

  getCategory() {
  }
}
