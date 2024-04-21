import { Component, Input, input } from '@angular/core';
import { GameManagerService } from '../../services/gameManager/game-manager.service';
import { Room } from '../../models/room/room';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrl: './room-list-item.component.css'
})
export class RoomListItemComponent {
  createdRoomKey = localStorage.getItem('createdRoomKey')

  @Input() room!: Room
  @Input() roomIndex!: number


}
