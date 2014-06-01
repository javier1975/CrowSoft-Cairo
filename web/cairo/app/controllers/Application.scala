package controllers

import play.api.mvc._
import actions._
import play.api.data._
import play.api.data.Forms._
import models.{ UserData }
import settings.Settings
import services.PasswordValidation
import play.api.Logger

object Application extends Controller with ProvidesUser {

  val form = Form(
    mapping(
      "email" -> email,
      "password" -> nonEmptyText(minLength = 12).verifying(PasswordValidation.passwordCheckConstraint)
    )(UserData.apply)(UserData.unapply))

  def index = GetAction { implicit request =>
    if(SessionStatus.isLoggedCompanyUser(request)) {
      Logger.debug("redirecting to Desktop.show")
      Redirect(controllers.logged.routes.Desktop.show)
    }
    else if(SessionStatus.isLoggedUser(request)) {
      Logger.debug("redirecting to Companies.list")
      Redirect(controllers.logged.routes.Companies.list)
    }
    else {
      Logger.debug("showing index")
      Ok(views.html.index(form, Settings.siteBaseURL))
    }
  }

  def error = GetAction { implicit request =>
    Ok(views.html.errorpages.error("Error"))
  }

}
