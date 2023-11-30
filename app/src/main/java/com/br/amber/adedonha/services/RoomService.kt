package com.br.amber.adedonha.services

import android.util.Log
import com.br.amber.adedonha.models.Player
import com.br.amber.adedonha.models.Room
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.GenericTypeIndicator
import com.google.firebase.database.ValueEventListener
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase

class RoomService() {

    private final val TAG = "RoomService"

    fun createRoom(
        numberOfRounds: Int,
        themes: List<String>,
        player1Name: String,
        onSuccess: (String?) -> Unit
    ){
        val database = Firebase.database
        val myRef = database.getReference("rooms")
        val roomId = myRef.push()
        val room = Room(
            numberOfRounds,
            currentRound = 0,
            themes,
            drawnLetters = Room.createMutableListOfLettersWithNullValues(numberOfRounds),
            player1 = Player(
                player1Name,
                Player.createListOfRounds(numberOfRounds, themes.size)
            ),
            player2 = Player(
                "player2",
                Player.createListOfRounds(numberOfRounds, themes.size)
            )
        )
        roomId.setValue(room).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                Log.i("RoomService","Sala criada!.")
                onSuccess(roomId.key.toString())
            } else {
                Log.e(javaClass.simpleName,"Erro ao criar sala: ${task.exception?.message}")
                onSuccess(null)
            }
        }
    }

    fun addWordsToRound(roomId: String, player: String, roundIndex: Int, listOfWords: List<String>) {
        val database = FirebaseDatabase.getInstance()
        val reference = database.getReference("rooms/$roomId/$player/rounds/$roundIndex/words")

        reference.setValue(listOfWords).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                Log.i("RoomService","Lista de palavras adicionada com sucesso.")
            } else {
                Log.e(javaClass.simpleName,"Erro ao adicionar lista de palavras: ${task.exception?.message}")
            }
        }

    }

    fun getWordsOfRound(roomId: String, player: String, roundIndex: Int) {
        val databaseReference: DatabaseReference = FirebaseDatabase.getInstance()
            .getReference("rooms/$roomId/$player/rounds/$roundIndex/words")
        databaseReference.addListenerForSingleValueEvent(object : ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                val wordsList: List<String?>? =
                    dataSnapshot.getValue(object : GenericTypeIndicator<List<String?>>() {})
                Log.i(javaClass.simpleName,"Lista recuperada: $wordsList")
            }

            override fun onCancelled(databaseError: DatabaseError) {
                Log.e(javaClass.simpleName,"Erro ao obter os valores: ${databaseError.message}")
            }
        })
    }

    private fun registerPartnerFound(roomId: String){
        val database = FirebaseDatabase.getInstance()
        val reference = database.getReference("rooms/$roomId/partnerFound")

        reference.setValue(true).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                Log.i("RoomService","Parceiro encontrado registrado!")
            } else {
                Log.e(javaClass.simpleName,"Erro ao registrar parceiro encontrado: ${task.exception?.message}")
            }
        }
    }

    fun listensIfPartnerFound(roomId: String, onSuccess: () -> Unit) {
        val database = FirebaseDatabase.getInstance()
        val reference = database.getReference("rooms/$roomId/partnerFound")

        reference.addValueEventListener(object : ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                Log.i(TAG, "Valor recuperado!")
                val partnerFound = dataSnapshot.getValue(Boolean::class.java)
                if(partnerFound!!){
                    onSuccess()
                }
            }

            override fun onCancelled(databaseError: DatabaseError) {
                Log.e(TAG, "Erro: ${databaseError.message}")
            }
        })
    }

    fun registerPlayer2(roomId: String, player2Name: String){
        val database = FirebaseDatabase.getInstance()
        val reference = database.getReference("rooms/$roomId/player2/name")

        reference.setValue(player2Name).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                Log.i("RoomService","Player 2 registrado!")
                registerPartnerFound(roomId)
            } else {
                Log.e(javaClass.simpleName,"Erro ao registrar Player 2: ${task.exception?.message}")
            }
        }
    }


}