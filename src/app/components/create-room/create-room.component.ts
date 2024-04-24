import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameManagerService } from '../../services/gameManager/game-manager.service';
import { Room } from '../../models/room/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {
  categoriesNames: string[] = []
  form!: FormGroup

  constructor(private gameManager: GameManagerService, private router: Router) { }
  createForm() {
    this.form = new FormGroup({
      userName: new FormControl(this.createAnonimousNickName()),
      selectPlayersQuantity: new FormControl("2"),
      selectRoundsQuantity: new FormControl("5"),
      categoryName: new FormControl("", Validators.required),

    })
  }

  createAnonimousNickName(): string {
    const min = 1111;
    const max = 9999;
    const randomNumberInRange: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return `Anonimous_${randomNumberInRange}`
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  addCategoryName() {
    const categoryName = this.capitalize(this.form.get('categoryName')?.value)
    if (!this.categoriesNames.includes(categoryName)) {
      this.categoriesNames.push(categoryName)
      this.form.get("categoryName")?.reset()
    }
  }

  deleteCategoryName(categoryName: string) {
    this.categoriesNames = this.categoriesNames.filter(category => category !== categoryName)
  }

  createRoom() {
    const roundsQuantity = this.form.get("selectRoundsQuantity")!.value
    const playersQuantity = this.form.get('selectPlayersQuantity')!.value
    const playerOwner = this.form.get('userName')!.value
    const room = new Room(roundsQuantity, playersQuantity, playerOwner, this.categoriesNames)
    this.gameManager.createRoom(room)/* .then(() => {
      this.router.navigate(['/room'])
    }) */
  }

  ngOnInit() {
    this.createForm()
  }

}
