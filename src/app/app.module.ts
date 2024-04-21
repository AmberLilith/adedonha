import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { RoomListItemComponent } from './components/room-list-item/room-list-item.component';
import { CategoryComponent } from './components/category/category.component';
import { ListRoomsComponent } from './components/list-rooms/list-rooms.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './components/room/room.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomListItemComponent,
    CategoryComponent,
    ListRoomsComponent,
    HeaderComponent,
    CreateRoomComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBCrGc1KO8Gt1N69kV_I57I-MBcMqk18-s",
      authDomain: "adedonha-da791.firebaseapp.com",
      databaseURL: "https://adedonha-da791-default-rtdb.firebaseio.com",
      projectId: "adedonha-da791",
      storageBucket: "adedonha-da791.appspot.com",
      messagingSenderId: "580854260706",
      appId: "1:580854260706:web:987ab0f30c748c91c90fbb",
      measurementId: "G-SJGZ1KE5EF"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
