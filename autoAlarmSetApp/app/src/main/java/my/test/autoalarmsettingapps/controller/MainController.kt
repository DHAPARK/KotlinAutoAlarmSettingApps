package my.test.autoalarmsettingapps.controller

import android.content.Intent
import android.util.Log
import my.test.autoalarmsettingapps.Model.LightValue

import my.test.autoalarmsettingapps.Service.getLightValue
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory


class MainController {
    fun getLightValueFromNodejsServer(){
        val retrofit = Retrofit.Builder().baseUrl("http://44.211.218.78:443/").addConverterFactory(
            GsonConverterFactory.create()).build()
        val service = retrofit.create(getLightValue::class.java)
        service.getlightvalue().enqueue(object : Callback<LightValue>{
            override fun onResponse(call: Call<LightValue>, response: Response<LightValue>) {
                if (response.isSuccessful) {
                    if(response.body() != null){
                        Log.d("버스 좌표 뭐오지 ","버스좌표 안오나요? ${response.body()}")

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