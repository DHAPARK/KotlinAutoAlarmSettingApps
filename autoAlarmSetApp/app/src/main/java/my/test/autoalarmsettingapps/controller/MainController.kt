package my.test.autoalarmsettingapps.controller

import android.content.Context
import android.content.Intent
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import my.test.autoalarmsettingapps.ArriveAlarmService
import my.test.autoalarmsettingapps.Model.LightValue

import my.test.autoalarmsettingapps.Service.getLightValue
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.text.SimpleDateFormat


class MainController {
    fun getLightValueFromNodejsServer(context: Context) : Boolean {
        val retrofit = Retrofit.Builder().baseUrl("http://44.211.218.78:443/").addConverterFactory(
            GsonConverterFactory.create()).build()
        val service = retrofit.create(getLightValue::class.java)

        var call: Call<LightValue> = service.getlightvalue()
        var realLightValue = ( call.execute().body() as LightValue ).lV

        Log.d(" 동작확인 ","동작확인 : ${realLightValue}")

        val currentTime : Long = System.currentTimeMillis() // ms로 반환

        var realTime = SimpleDateFormat("HH:mm:ss").format(currentTime).split(":")[0]

        //if ( ((realTime.toInt()) > 22) && realLightValue < 20 ) {
        //if ( ((realTime.toInt()) > 9) && realLightValue < 20 ) {
        if ( ((realTime.toInt()) > 10) && realLightValue < 20 ) {
            Log.d("조건충족","조건충족")

            return true

        }

        return false

    }
}