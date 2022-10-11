import { connect } from 'mqtt'
import mqttOptions from './config.js'
import { Validator } from './validator.js'

import responseAdd from './schemas/responseAdd.js'
import responseRead from './schemas/responseRead.js'
import responseReadAll from './schemas/responseReadAll.js'

import sysError from './schemas/systemError.js'
import chatMsg from './schemas/chatMessage.js'
import forwardedChatMessage from './schemas/forwardedChatMessage.js'
import extRequest from './schemas/externalRequest.js'
import broadcast from './schemas/broadcast.js'
import songPlayed from './schemas/songPlayed.js'
import songReaction from './schemas/songReaction.js'
import requestToBroadcast from './schemas/requestToBroadcast.js'
import userConnect from './schemas/userConnect.js'
import userDisconnect from './schemas/userDisconnect.js'
import stats from './schemas/stats.js'
import reportStats from './schemas/reportStats.js'

const client = connect(mqttOptions.host, mqttOptions)

export default {
  client,
  responseAdd: new Validator(responseAdd),
  responseRead: new Validator(responseRead),
  responseReadAll: new Validator(responseReadAll),
  systemError: new Validator(sysError),
  chatMessage: new Validator(chatMsg),
  forwardedChatMessage: new Validator(forwardedChatMessage),
  externalRequest: new Validator(extRequest),
  broadcast: new Validator(broadcast),
  songPlayed: new Validator(songPlayed),
  songReaction: new Validator(songReaction),
  requestToBroadcast: new Validator(requestToBroadcast),
  userConnect: new Validator(userConnect),
  userDisconnect: new Validator(userDisconnect),
  stats: new Validator(stats),
  reportStats: new Validator(reportStats)
}
