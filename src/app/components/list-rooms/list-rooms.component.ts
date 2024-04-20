import { Component } from '@angular/core';
import { Room } from '../../models/room/room';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrl: './list-rooms.component.css'
})
export class ListRoomsComponent {
  rooms: Room[] = []

  constructor(private gameManager: GameManagerService) { }

  createRoom() {
    this.gameManager.createRoom()
  }

  getRooms() {
    this.gameManager.getRooms().subscribe(rooms => {
      this.rooms = Object.values(rooms)
    })
  }

  ngOnInit() {
    this.getRooms()
  }
}
