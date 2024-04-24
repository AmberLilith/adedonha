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
import { environment } from '../environments/environment';
import { EnterRoomComponent } from './components/enter-room/enter-room.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomListItemComponent,
    CategoryComponent,
    ListRoomsComponent,
    HeaderComponent,
    CreateRoomComponent,
    RoomComponent,
    EnterRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'adedonha')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
