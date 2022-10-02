import { Validator } from '../validator.js'

import add from './responder/add.js'
import get from './responder/get.js'
import getAll from './responder/getAll.js'
import * as sysError from './systemError.js'
import * as chatMsg from './chatMessage.js'

export const addResponse = {
  request: new Validator(add.request),
  response: new Validator(add.response)
}
export const getResponse = {
  request: new Validator(get.request),
  response: new Validator(get.response)
}
export const getAllResponses = {
  request: new Validator(getAll.request),
  response: new Validator(getAll.response)
}

export const systemError = new Validator(sysError)
export const chatMessage = new Validator(chatMsg)
