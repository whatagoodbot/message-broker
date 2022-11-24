import bot from './bot.js'
import client from './client.js'
import djs from './djs.js'
import messageId from './messageId.js'
import nowPlaying from './nowPlaying.js'
import room from './room.js'
import sender from './sender.js'
import user from './user.js'
import users from './users.js'

export const addStandard = () => {
  return {
    bot,
    client,
    djs,
    messageId,
    nowPlaying,
    room,
    sender,
    user,
    users
  }
}

export const required = ['messageId', 'room', 'sender', 'client', 'user']
