import { Component } from '@angular/core';
import { GameManagerService } from '../../services/gameManager/game-manager.service';
import { Room } from '../../models/room/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  roomKey: string
  room!: Room

  constructor(private gameManager: GameManagerService) {
    this.roomKey = localStorage.getItem('createdRoomKey')!
  }

  ngOnInit() {
    this.gameManager.getRoom(this.roomKey).subscribe(room => {
      this.room = room
      console.log(this.room)
    })
  }
}
