package models.cairo.modules.general

import java.sql.{Connection, CallableStatement, ResultSet, Types, SQLException}
import anorm.SqlParser._
import anorm._
import services.DateUtil
import services.db.DB
import models.cairo.system.database._
import play.api.Play.current
import models.domain.CompanyUser
import java.util.Date
import play.api.Logger
import play.api.libs.json._
import scala.util.control.NonFatal

case class ContabilidadSetting(userId: Int, settings: List[Setting])

object ContabilidadSetting {

  lazy val emptyContabilidadSetting = ContabilidadSetting(DBHelper.NoId, List())

  private val contabilidadSettingParser: RowParser[Setting] = {
    SqlParser.get[String](C.CFG_ASPECTO) ~
    SqlParser.get[String](C.CFG_GRUPO) ~
    SqlParser.get[String](C.CFG_VALOR) ~
    SqlParser.get[Option[Int]](C.EMP_ID) map {
    case
        key ~
        group ~
        value ~
        empId =>
        Setting(
          key,
          group,
          value,
          empId.getOrElse(0)
        )
    }
  }

  def create(user: CompanyUser, ContabilidadSetting: ContabilidadSetting): ContabilidadSetting = {
    save(user, ContabilidadSetting, true)
  }

  def update(user: CompanyUser, ContabilidadSetting: ContabilidadSetting): ContabilidadSetting = {
    save(user, ContabilidadSetting, false)
  }

  private def save(user: CompanyUser, ContabilidadSetting: ContabilidadSetting, isNew: Boolean): ContabilidadSetting = {
    def getFields = {
      List(

      )
    }
    def throwException = {
      throw new RuntimeException(s"Error when saving ${C.CONFIGURACION}")
    }

    DBHelper.saveEx(
      user,
      Register(
        C.CONFIGURACION,
        "",
        ContabilidadSetting.userId,
        false,
        true,
        true,
        getFields),
      isNew,
      ""
    ) match {
      case SaveResult(true, id) => load(user, id).getOrElse(throwException)
      case SaveResult(false, id) => throwException
    }
  }

  def load(user: CompanyUser, id: Int): Option[ContabilidadSetting] = {

    Logger.debug(s"id: $id")

    val generalSettings = loadWhere(
      user,
      s"emp_id IS NULL AND cfg_grupo = 'Contabilidad-General'"
    )

    Logger.debug(s"generalSettings: ${generalSettings.toString}")

    val companySettings = loadWhere(
      user,
      s"emp_id = {empId} AND cfg_grupo = 'Contabilidad-General'",
      'empId -> user.cairoCompanyId
    )

    Logger.debug(s"companySettings: ${companySettings.toString}")

    def getSelect(id: Int, name: String) = {
      s"SELECT ${C.DOC_NAME} AS ${C.CFG_VALOR}, '$name' AS ${C.CFG_ASPECTO}, '' AS ${C.CFG_GRUPO}, NULL AS ${C.EMP_ID}" +
        s" FROM ${C.DOCUMENTO} WHERE ${C.DOC_ID} = $id"
    }
    def getSelectForTable(table: String, idColumn: String, nameColumn: String, id: Int, name: String) = {
      s"SELECT $nameColumn AS ${C.CFG_VALOR}, '$name' AS ${C.CFG_ASPECTO}, '' AS ${C.CFG_GRUPO}, NULL AS ${C.EMP_ID}" +
        s" FROM $table WHERE $idColumn = $id"
    }

    /*
    val KEY_GRUPO_GENERAL = "Contabilidad-General"
    val KEY_CLAVE_FISCAL = "Clave Fiscal"
    val KEY_FACTURA_ELECTRONICA = "Factura Electronica Asincronica"
    val KEY_PUNTO_VENTA_FE = "Punto Venta FE"
    */
    val KEY_TA_ID_PRE_FACTURA = "Talonario Pre-Factura - Factura Electronica"

    def getId(value: String): Int = {
      try {
        value.toInt
      } catch {
        case NonFatal(e) => {
          0
        }
      }
    }

    def getStringFromAny(anyValue: Any, default: String) = anyValue match {
      case s: String => s
      case _ => default
    }
    def getSelectForKey(key: String, anyValue: Any) = {
      val value = getStringFromAny(anyValue, "0")

      key match {

        case KEY_TA_ID_PRE_FACTURA => {
          val ta_id = getId(value)
          getSelectForTable(C.TALONARIO, C.TA_ID, C.TA_NAME, ta_id, KEY_TA_ID_PRE_FACTURA)
        }
        case _ => ""
      }
    }
    def getSelectForSetting(setting: Setting) = {
      getSelectForKey(setting.key, setting.value)
    }
    def getSelectForSettings(list: List[Setting]): List[String] = list match {
      case Nil => List()
      case setting :: t => getSelectForSetting(setting) :: getSelectForSettings(t)
    }

    val selectList = getSelectForSettings(companySettings).filter(q => q != "")
    val sqlstmt = selectList.mkString(" UNION ")

    val names: List[Setting] = if(sqlstmt.isEmpty) List() else loadSql(user, sqlstmt)

    def getNameForKey(key: String, names: List[Setting]): Option[String] = names match {
      case Nil => None
      case setting :: t => if(setting.key == key) Some(getStringFromAny(setting.value, "")) else getNameForKey(key, t)
    }
    def getComplexSetting(setting: Setting, names: List[Setting]) = {
      getNameForKey(setting.key, names) match {
        case Some(name) => Setting(
          setting.key,
          setting.group,
          ComplexSetting(getStringFromAny(setting.value, "0"), name),
          setting.empId)
        case None => {
          if(getSelectForKey(setting.key, "") == "") {
            setting
          }
          else {
            Setting(
              setting.key,
              setting.group,
              ComplexSetting("0", ""),
              setting.empId)
          }
        }
      }
    }
    val complexSettings = companySettings.map(setting => getComplexSetting(setting, names))

    Logger.debug(s"generalSettings: ${complexSettings.toString}")

    Some(ContabilidadSetting(id, generalSettings ::: complexSettings))
  }

  def loadWhere(user: CompanyUser, where: String, args : scala.Tuple2[scala.Any, anorm.ParameterValue[_]]*) = {
    val sqlstmt = s"SELECT * FROM ${C.CONFIGURACION} WHERE $where"
    Logger.debug(s"loadWhere: sqlstmt: $sqlstmt")
    DB.withConnection(user.database.database) { implicit connection =>
      SQL(sqlstmt)
        .on(args: _*)
        .as(contabilidadSettingParser.*)
    }
  }

  def loadSql(user: CompanyUser, sqlstmt: String, args : scala.Tuple2[scala.Any, anorm.ParameterValue[_]]*) = {
    Logger.debug(s"loadSql: sqlstmt: $sqlstmt")
    DB.withConnection(user.database.database) { implicit connection =>
      SQL(sqlstmt)
        .on(args: _*)
        .as(contabilidadSettingParser.*)
    }
  }

  def get(user: CompanyUser, id: Int): ContabilidadSetting = {
    load(user, id) match {
      case Some(p) => p
      case None => emptyContabilidadSetting
    }
  }

}