import { Component, Input, SimpleChanges, input } from '@angular/core';
import { GameManagerService } from '../../services/gameManager/game-manager.service';
import { Room } from '../../models/room/room';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  room!: Room
  //private playersInTheRoomSubscription: Subscription | undefined

  constructor(private gameManager: GameManagerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const roomKey = this.activatedRoute.snapshot.paramMap.get('key')!
    this.gameManager.getRoom(roomKey).subscribe(room => {
      this.room = room
      /* this.gameManager.getPlayers(this.room.key).subscribe(playersResponse => {
        const players: Player[] = playersResponse
        if (this.room.playersInTheRoom == this.room.playersQuantity) {
          document.getElementById('waitingPlayers')!.style.display = 'none'
          document.getElementById('game')!.style.display = 'block'
        }
      }) */
    })
  }

  /* ngOnDestroy() {
    if (this.playersInTheRoomSubscription) {
      this.playersInTheRoomSubscription.unsubscribe();
    }
  } */


  leaveRoom() {
    this.gameManager.leaveRoom(this.room.key, 0).then(() => {
      alert('cu')
    })
  }

}