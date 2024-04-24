import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Room } from '../../models/room/room';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Player } from '../../models/player/player';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  rooms = this.database.list("rooms")
  constructor(private database: AngularFireDatabase, private router: Router) { }

  createRoom(room: Room) {
    //return new Promise<void>((resolve, reject) => {
    const reports = this.database.list(`rooms`);
    const newRoomRef = this.rooms.push({
      key: "",
      currentRound: room.currentRound,
      playersQuantity: room.playersQuantity,
      playersInTheRoom: room.playersInTheRoom,
      drawnLetters: room.drawnLetters,
      players: room.players,
      playerOwner: room.playerOwner,
      categoriesNames: room.categoriesNames,
      roundsQuantity: room.roundsQuantity,
      stop: room.stop
    });

    newRoomRef.then((snapshot) => {
      const key = snapshot.key
      newRoomRef.update({ key: key })
        .then(() => {
          console.log('Chave atualizada com sucesso.')
          this.router.navigate(['/room', key])
          //resolve();
        })
        .catch(error => {
          console.error('Erro ao atualizar a chave:', error);
          //reject(error);
        })
    })
      .catch(error => {
        console.error('Erro ao criar nova sala:', error);
        //reject(error);
      })
    //})

  }

  /*   createRoom(room: Room) {
      const newRoomRef = this.rooms.push({
        key: "",
        currentRound: room.currentRound,
        playersQuantity: room.playersQuantity,
        playersInTheRoom: room.playersInTheRoom,
        drawnLetters: room.drawnLetters,
        players: room.players,
        playerOwner: room.playerOwner,
        categoriesNames: room.categoriesNames,
        roundsQuantity: room.roundsQuantity,
        stop: room.stop
      });
      const newRoomKey = newRoomRef.key;
      newRoomRef.then(() => {
        console.info("Sala criada com sucesso!");
        localStorage.setItem('roomKey', newRoomKey!)
        this.router.navigate(['/room'])
      }).catch(error => console.error('Erro ao criar nova sala:', error));
    } */

  getRooms(): Observable<any> {
    return this.database.object('rooms/').valueChanges();
  }

  getRoom(roomKey: string): Observable<any> {
    return this.database.object('rooms/' + roomKey).valueChanges();
  }

  getPlayers(roomKey: string): Observable<any> {
    return this.database.object(`rooms/${roomKey}/players`).valueChanges();
  }

  getPlayer(roomKey: string, playerIndex: number): Observable<any> {
    return this.database.object(`rooms/${roomKey}/players/${playerIndex}`).valueChanges();
  }

  updatePlayersInTheRoom(roomKey: string, playersInTheRoom: number) {
    return this.database.object(`rooms/${roomKey}`).update({ playersInTheRoom: playersInTheRoom });
  }

  addPlayer(roomKey: string, playerIndex: number, player: Player) {
    return this.database.object(`rooms/${roomKey}/players/${playerIndex}`).update(player);
  }

  deleteRoom(roomKey: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const reportRef = this.database.object(`rooms/${roomKey}`);
      reportRef.remove()
        .then(() => {
          resolve();
        })
        .catch(error => {
          console.error('Erro ao deletar Relato:', error);
          reject(error);
        });
    });
  }

  leaveRoom(roomKey: string, playerIndex: number) {
    return this.database.object(`rooms/${roomKey}/players/${playerIndex}`).update({ active: false });
  }

  playersInTheRoomChanges(roomKey: string): Observable<any> {
    return this.database.object(`rooms/${roomKey}/playersInTheRoom`).valueChanges();
  }
}

/* Codigo para atualizar um dado especifico:
this.database.object(`caminho/para/dado/dado_especifico`).update({ dado_especifico: valor }); */