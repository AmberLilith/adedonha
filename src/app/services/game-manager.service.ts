import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Room } from '../models/room/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  rooms = this.database.list("rooms")
  constructor(private database: AngularFireDatabase) { }

  createRoom() {
    const categoriesNames = ["Filmes", "Novela", "Frutas", "Cidade", "País"]
    const room = new Room(5, 2, categoriesNames)
    const newRoomRef = this.rooms.push({
      currentRound: room.currentRound,
      drawnLetters: room.drawnLetters,
      players: room.players,
      playersInTheRoom: room.playersInTheRoom,
      playersQuantity: room.playersQuantity,
      roundsQuantity: room.roundsQuantity,
      stop: room.stop
    });
    const newRoomKey = newRoomRef.key;
    newRoomRef.then(() => {
      console.info("Sala criada com sucesso!");
      localStorage.setItem('roomKey', newRoomKey!)
    }).catch(error => console.error('Erro ao criar nova sala:', error));
  }

  getRoomCurrentRound(roomKey: string): Observable<any> {
    return this.database.object(`rooms/${roomKey}/currentRound`).valueChanges();
  }

  getRooms(): Observable<any> {
    return this.database.object('rooms/').valueChanges();
  }

  getRoom(roomKey: string): Observable<any> {
    return this.database.object('rooms/' + roomKey).valueChanges();
  }



}

