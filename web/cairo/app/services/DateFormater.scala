package formatters.json

import play.api.Logger
import play.api.libs.json.Json.toJson
import play.api.libs.json.JsValue
import play.api.libs.json.Format
import play.api.libs.json.JsResult
import play.api.libs.json.JsSuccess

import java.util.Date
import java.text.SimpleDateFormat
import java.util.TimeZone

import models.cairo.modules.general.U

object DateFormatter {

  implicit object JsonDateFormatter extends Format[Date] {

    val dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
    dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"))

    def writes(date: Date): JsValue = {
      toJson(dateFormat.format(date))
    }

    def reads(j: JsValue): JsResult[Date] = {
      try {
        JsSuccess(parse(j.as[String]))
      } catch {
        case e: Exception => JsSuccess(U.NO_DATE)
      }
    }

  }

  def parse(date: String): Date = {
    try {
      val calendar = javax.xml.bind.DatatypeConverter.parseDateTime(date)
      calendar.getTime
    } catch {
      case e: Exception => {
        Logger.debug(s"error ${e.getMessage}")
        U.NO_DATE
      }
    }
  }
}