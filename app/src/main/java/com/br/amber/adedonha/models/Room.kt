package com.br.amber.adedonha.models

data class Room(
    val numberOfRounds: Int,
    var currentRound: Int = 0,
    val themes: List<String>,
    var drawnLetters: MutableList<String>,
    var stop: Boolean = false,
    var player1: Player,
    var player2: Player,
    var partnerFound: Boolean = false
) {

    constructor(): this(0, 0, listOf(), mutableListOf(),false, Player(), Player())


    companion object{
        fun createMutableListOfLettersWithNullValues(size: Int): MutableList<String>{
            val mutableListWithEmptyString = mutableListOf<String>()
            for (i in 1..size){
                mutableListWithEmptyString.add("")
            }
            return mutableListWithEmptyString
        }

    }



}