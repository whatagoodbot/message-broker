import { connect } from 'mqtt'
import mqttOptions from './config.js'
import { Validator } from './validator.js'

import activeUsers from './schemas/activeUsers.js'
import broadcast from './schemas/broadcast.js'
import chatMessage from './schemas/chatMessage.js'
import djChange from './schemas/djChange.js'
import externalRequest from './schemas/externalRequest.js'
import forwardedChatMessage from './schemas/forwardedChatMessage.js'
import getActiveUsers from './schemas/getActiveUsers.js'
import responseAdd from './schemas/responseAdd.js'
import responseDelete from './schemas/responseDelete.js'
import responseRead from './schemas/responseRead.js'
import responseReadAll from './schemas/responseReadAll.js'
import songPlayed from './schemas/songPlayed.js'
import songReaction from './schemas/songReaction.js'
import userConnect from './schemas/userConnect.js'
import userDisconnect from './schemas/userDisconnect.js'

export default {
  client: connect(mqttOptions.host, mqttOptions),
  activeUsers: new Validator(activeUsers),
  broadcast: new Validator(broadcast),
  chatMessage: new Validator(chatMessage),
  djChange: new Validator(djChange),
  externalRequest: new Validator(externalRequest),
  forwardedChatMessage: new Validator(forwardedChatMessage),
  getActiveUsers: new Validator(getActiveUsers),
  responseAdd: new Validator(responseAdd),
  responseDelete: new Validator(responseDelete),
  responseRead: new Validator(responseRead),
  responseReadAll: new Validator(responseReadAll),
  songPlayed: new Validator(songPlayed),
  songReaction: new Validator(songReaction),
  userConnect: new Validator(userConnect),
  userDisconnect: new Validator(userDisconnect)
}
