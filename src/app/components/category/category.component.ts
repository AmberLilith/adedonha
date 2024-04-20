import { Component } from '@angular/core';
import { Category } from '../../models/category/category';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category!: Category
  createdRoomKey = localStorage.getItem('createdRoomKey')

  constructor(private gameManager: GameManagerService) { }

  getCategory() {
    if (this.createdRoomKey) {
      this.gameManager.getRoom(this.createdRoomKey).subscribe(room => {
        this.category = room.room.players[0].categories[1]
      })
    }
  }
}
