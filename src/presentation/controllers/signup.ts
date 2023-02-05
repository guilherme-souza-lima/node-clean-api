import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handler (httpRequest: HttpRequest): HttpResponse {
    const requeridField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requeridField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 0,
      body: null
    }
  }
}
