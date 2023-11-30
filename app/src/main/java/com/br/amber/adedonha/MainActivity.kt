package com.br.amber.adedonha

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.br.amber.adedonha.services.RoomService

class MainActivity : AppCompatActivity() {
    private var roomId: String? = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val button = findViewById<Button>(R.id.button)
        val button2 = findViewById<Button>(R.id.button2)


        val roomService = RoomService()




        button.setOnClickListener {
           val result =  roomService.createRoom(5, listOf("Filme", "Fruta", "Novela"), "Ordone", ::getRoomId)
           //roomService.registerPlayer2("-NkNuu8xaXJY3FAiAFIm", "Lilith Poderosa")

        }

        button2.setOnClickListener {
            Toast.makeText(
                this,
                roomId,
                Toast.LENGTH_SHORT,
            ).show()
        }


        //roomService.listensIfPartnerFound("-NkNuu8xaXJY3FAiAFIm", ::teste)

    }

    private fun getRoomId(roomId:String?){
        this.roomId = roomId
    }
}