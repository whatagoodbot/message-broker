import { connect } from 'mqtt'
import mqttOptions from './config.js'

import { responder, systemError, chatMessage }  from '../src/schemas/index.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  chatMessage,
  client,
  responder,
  systemError
}
