export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    userId: {
      type: 'string',
      description: 'The users unique identifier'
    },
    reaction: {
      type: 'string',
      description: 'The artist for the song',
      enum: ['nope', 'dope', 'star']
    },
    room: {
      type: 'string',
      description: 'The room the song is playing in'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'userId', 'reaction', 'room'],
  additionalProperties: false
}
