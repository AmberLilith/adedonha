package com.br.amber.adedonha.models

class Player(
    val name: String,
    var rounds: MutableList<Round>
) {
    constructor(): this("", mutableListOf())

    companion object{
        fun createListOfRounds(size: Int, themesSize: Int): MutableList<Round>{
            val mutableListOfRounds = mutableListOf<Round>()

            fun createListOfWords(themesSize: Int):MutableList<String>{
                val mutableListOfWords = mutableListOf<String>()
                for(i in 1..themesSize){
                    mutableListOfWords.add("")
                }
                return mutableListOfWords
            }

            for (i in 1..size){
                mutableListOfRounds.add(
                    Round(
                        createListOfWords(themesSize),
                        0
                    )
                )
            }


            return mutableListOfRounds
        }
    }
}