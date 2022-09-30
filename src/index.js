import { connect } from 'mqtt'
import mqttOptions from './config.js'

import error from '../src/schemas/error/index.js'
import responder from '../src/schemas/responder/index.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  client,
  error,
  responder
}
