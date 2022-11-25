package my.test.autoalarmsettingapps

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import my.test.autoalarmsettingapps.controller.MainController

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        var mc = MainController()
        var btn = findViewById<Button>(R.id.testBtn)

        btn.setOnClickListener {
            mc.getLightValueFromNodejsServer()
        }

    }
}