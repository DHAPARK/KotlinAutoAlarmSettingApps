package my.test.autoalarmsettingapps.controller

import android.content.Context
import android.content.Intent
import android.util.Log
import my.test.autoalarmsettingapps.ArriveAlarmService
import my.test.autoalarmsettingapps.Model.LightValue

import my.test.autoalarmsettingapps.Service.getLightValue
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.text.SimpleDateFormat


class MainController {
    fun getLightValueFromNodejsServer(context: Context){
        val retrofit = Retrofit.Builder().baseUrl("http://44.211.218.78:443/").addConverterFactory(
            GsonConverterFactory.create()).build()
        val service = retrofit.create(getLightValue::class.java)
        service.getlightvalue().enqueue(object : Callback<LightValue>{
            override fun onResponse(call: Call<LightValue>, response: Response<LightValue>) {
                if (response.isSuccessful) {
                    if(response.body() != null){
                        Log.d("버스 좌표 뭐오지 ","버스좌표 안오나요? ${(response.body() as LightValue).lV}")
                        val realLightValue = (response.body() as LightValue).lV
                        val currentTime : Long = System.currentTimeMillis() // ms로 반환
                        var realTime = SimpleDateFormat("HH:mm:ss").format(currentTime).split(":")[0]

                        if ( ((realTime.toInt()) > 22) &&  realLightValue < 20 ) {

                            val serviceIntent = Intent(context, ArriveAlarmService::class.java)

                            context.startService(serviceIntent)
                        }

                    }
                }
            }

            override fun onFailure(call: Call<LightValue>, t: Throwable) {
                Log.e("에러내용",t.toString())
                Log.e("에러발생","getArriveBus retrofit 에러")
            }
        })
    }
}