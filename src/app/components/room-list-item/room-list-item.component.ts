import { Component, Input, input } from '@angular/core';
import { Room } from '../../models/room/room';
import { Player } from '../../models/player/player';
import { GameManagerService } from '../../services/gameManager/game-manager.service';
import { UtilsService } from '../../services/utils/utils.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrl: './room-list-item.component.css'
})
export class RoomListItemComponent {
  form!: FormGroup
  @Input() room!: Room
  @Input() roomIndex!: number

  constructor(private gameManager: GameManagerService, private utilsService: UtilsService, private router: Router) { }

  createForm() {
    this.form = new FormGroup({
      userName: new FormControl(this.utilsService.createAnonimousNickName(), Validators.required),

    })
  }

  enterRoom(roomKey: string) {
    let indexToAddPlayer: number
    const playerToAdd = new Player(this.form.get('userName')?.value, this.room.categoriesNames, 0, true)
    indexToAddPlayer = this.room.playersQuantity - (this.room.playersQuantity - this.room.players.length)
    this.gameManager.addPlayer(roomKey, indexToAddPlayer, playerToAdd).then(() => {
      this.gameManager.updatePlayersInTheRoom(roomKey, this.room.playersInTheRoom + 1).then(() => {
        this.gameManager.getRoom(roomKey).subscribe(roomResponse => {
          const updatedRoom: Room = roomResponse
          this.router.navigate(['/room', roomKey])
        })
      }).catch(error => {
        console.error("Não foi possível atualizar a quantidade de jogadores na sala. Erro: " + error)
      })
    }).catch(error => {
      console.error("Não foi possível adicionar novo jogador. Erro: " + error)
    })
  }


  ngOnInit() {
    this.createForm()
  }

}
