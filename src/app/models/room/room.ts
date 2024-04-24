import { Player } from "../player/player";

export class Room {
    key: string = ""
    roundsQuantity: number
    playersQuantity: number
    playersInTheRoom: number = 1
    currentRound: number = 1
    playerOwner: string
    categoriesNames: string[]
    drawnLetters: string[] = [""]
    players: Player[] = []
    stop = { sent: false, sender: -1 }

    constructor(roundsQuantity: number, playersQuantity: number, playerOwner: string, categoriesNames: string[]) {
        this.roundsQuantity = roundsQuantity
        this.playersQuantity = playersQuantity
        this.playerOwner = playerOwner
        this.categoriesNames = categoriesNames
        this.players.push(new Player(playerOwner, categoriesNames, 0, true))
    }

}
