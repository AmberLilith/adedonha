import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ListRoomsComponent } from './components/list-rooms/list-rooms.component';
import { RoomListItemComponent } from './components/room-list-item/room-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListRoomsComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateRoomComponent
  },
  {
    path: 'room',
    component: RoomListItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
