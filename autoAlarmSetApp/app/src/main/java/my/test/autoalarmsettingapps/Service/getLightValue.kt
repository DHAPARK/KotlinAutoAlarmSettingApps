package my.test.autoalarmsettingapps.Service

import my.test.autoalarmsettingapps.Model.LightValue
import retrofit2.Call
import retrofit2.http.*


interface getLightValue {
    //GET 예제
    //추후 변경가능
    @GET("getLightValue")
    fun getlightvalue(
        //@Query("lV") lV:Int,
        //@Query("resultType") resultType:String
    ): Call<LightValue>
}