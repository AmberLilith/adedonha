package com.br.amber.adedonha.models

class Round(
    var words: MutableList<String>,
    var points: Int = 0
) {
    constructor(): this(mutableListOf(), 0)

    companion object{
        fun createMutableListOfWordsWithEmptyStrings(size: Int): MutableList<String>{
            val mutableListWithEmptyString = mutableListOf<String>()
            for (i in 1..size){
                mutableListWithEmptyString.add("")
            }
            return mutableListWithEmptyString
        }
    }
}