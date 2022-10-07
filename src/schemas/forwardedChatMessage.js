export default {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'The message received from a user in chat'
    },
    sender: {
      type: 'string',
      description: 'The message received from a user in chat'
    },
    room: {
      type: 'string',
      description: 'The room the message was posted in'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['message', 'sender', 'room'],
  additionalProperties: false
}
