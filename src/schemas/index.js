import { Validator } from '../validator.js'

import add from './responder/add.js'
import get from './responder/get.js'
import getAll from './responder/getAll.js'
import systemError from './systemError.js'
import chatMessage from './chatMessage.js'

export default {
  responder: {
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
  },
  systemError: new Validator(systemError),
  chatMessage: new Validator(chatMessage)
}
