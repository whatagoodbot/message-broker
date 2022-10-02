import { Validator } from '../validator.js'

import add from './responder/add.js'
import get from './responder/get.js'
import getAll from './responder/getAll.js'
import * as sysError from './systemError.js'
import chatMessage from './chatMessage.js'

export const responder = {
  add: {
    request: new Validator(add.request),
    response: new Validator(add.response)
  },
  get: {
    request: new Validator(get.request),
    response: new Validator(get.response)
  },
  getAll: {
    request: new Validator(getAll.request),
    response: new Validator(getAll.response)
  }
}

export const systemError = new Validator(sysError)
export const chatMessage = new Validator(chatMessage)
