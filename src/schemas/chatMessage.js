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
      description: 'The message received from a user in chat'
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
