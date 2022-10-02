import { connect } from 'mqtt'
import mqttOptions from './config.js'
import { Validator } from './validator.js'

import add from './schemas/responder/add.js'
import get from './schemas/responder/get.js'
import getAll from './schemas/responder/getAll.js'
import * as sysError from './schemas/systemError.js'
import * as chatMsg from './schemas/chatMessage.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  client,
  addResponse: {
    request: new Validator(add.request),
    response: new Validator(add.response)
  },
  getResponse: {
    request: new Validator(get.request),
    response: new Validator(get.response)
  },
  getAllResponses: {
    request: new Validator(getAll.request),
    response: new Validator(getAll.response)
  },
  systemError: new Validator(sysError),
  chatMessage: new Validator(chatMsg)
}
