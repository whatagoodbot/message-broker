export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    room: {
      type: 'string',
      description: 'A unique identifier for the room - commonly known as the "slug"'
    },
    nickname: {
      type: 'string',
      description: 'The handle the user goes by - used for greetings'
    },
    userId: {
      type: 'string',
      description: 'The users unique identifier'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'room', 'userId', 'nickname'],
  additionalProperties: false
}
