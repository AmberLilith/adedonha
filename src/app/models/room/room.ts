import { Player } from "../player/player";

export class Room {
    roundsQuantity: number
    currentRound: number = 1
    playersQuantity: number
    drawnLetters: string[] = [""]
    stop = { sent: false, sender: -1 }
    playersInTheRoom: number = 1
    players: Player[]

    constructor(roundsQuantity: number, playersQuantity: number, categoriesNames: string[]) {
        this.roundsQuantity = roundsQuantity
        this.playersQuantity = playersQuantity
        this.players = this.setDefaultPlayersList(categoriesNames)
    }

    setDefaultPlayersList(categoriesNames: string[]): Player[] {
        const playersList: Player[] = []
        for (let i = 0; i < this.playersQuantity; i++) {
            playersList.push(new Player("", categoriesNames, 0))
        }
        return playersList
    }

    /* setDefaultPlayersList(categoriesNames: string[]): Player[] {
        const playersList: Player[] = []
        for (const category in categoriesNames) {
            playersList.push(new Player("", categoriesNames, 0))
        }
        return playersList
    } */
}
