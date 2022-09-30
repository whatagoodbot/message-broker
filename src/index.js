import { connect } from 'mqtt'
import mqttOptions from './config.js'

import errors from '../src/schemas/errors/index.js'
import responder from '../src/schemas/responder/index.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  client,
  errors,
  responder
}
