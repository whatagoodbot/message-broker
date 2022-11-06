import { connect } from 'mqtt'
import mqttOptions from './config.js'
import { Validator } from './validator.js'

import broadcast from './schemas/broadcast.js'
import chatMsg from './schemas/chatMessage.js'
import externalRequest from './schemas/externalRequest.js'
import forwardedChatMessage from './schemas/forwardedChatMessage.js'
import reportStats from './schemas/reportStats.js'
import requestToBroadcast from './schemas/requestToBroadcast.js'
import responseAdd from './schemas/responseAdd.js'
import responseRead from './schemas/responseRead.js'
import responseReadAll from './schemas/responseReadAll.js'
import songPlayed from './schemas/songPlayed.js'
import songReaction from './schemas/songReaction.js'
import themeUpdate from './schemas/themeUpdate.js'
import userConnect from './schemas/userConnect.js'
import userDisconnect from './schemas/userDisconnect.js'
import activeUsers from './schemas/activeUsers.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  client,
  broadcast: new Validator(broadcast),
  chatMessage: new Validator(chatMsg),
  externalRequest: new Validator(externalRequest),
  forwardedChatMessage: new Validator(forwardedChatMessage),
  reportStats: new Validator(reportStats),
  requestToBroadcast: new Validator(requestToBroadcast),
  responseAdd: new Validator(responseAdd),
  responseRead: new Validator(responseRead),
  responseReadAll: new Validator(responseReadAll),
  songPlayed: new Validator(songPlayed),
  songReaction: new Validator(songReaction),
  themeUpdate: new Validator(themeUpdate),
  userConnect: new Validator(userConnect),
  userDisconnect: new Validator(userDisconnect),
  activeUsers: new Validator(activeUsers)
}
