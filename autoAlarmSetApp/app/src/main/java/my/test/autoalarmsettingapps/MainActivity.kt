package my.test.autoalarmsettingapps

import android.content.Intent
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.StrictMode
import android.util.Log
import android.widget.Button
import androidx.annotation.RequiresApi
import my.test.autoalarmsettingapps.controller.MainController
import kotlin.coroutines.CoroutineContext
import kotlinx.coroutines.*

@RequiresApi(Build.VERSION_CODES.S)
class MainActivity : AppCompatActivity() , CoroutineScope {

    //코루틴
    private lateinit var job : Job
    override val coroutineContext : CoroutineContext
        get() = Dispatchers.Main + job
    //코루틴

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        job = Job()

        var mc = MainController()
        //var btn = findViewById<Button>(R.id.testBtn)
        //btn.setOnClickListener {
        //}

        if ( Build.VERSION.SDK_INT > 9 ){
            val policy = StrictMode.ThreadPolicy.Builder().permitAll().build()
            StrictMode.setThreadPolicy(policy)
        }


        launch {
            while (true) {

                Thread.sleep(3000)

                Log.d("돌고있나", "돌고있나")

                if (mc.getLightValueFromNodejsServer(applicationContext)) break;

            }

            val serviceIntent = Intent(this@MainActivity, ArriveAlarmService::class.java)

            startService(serviceIntent)

        }




    }
}