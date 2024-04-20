import { Component, Input, input } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { Room } from '../../models/room/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  createdRoomKey = localStorage.getItem('createdRoomKey')

  @Input() room!: Room
  @Input() roomIndex!: number


}
