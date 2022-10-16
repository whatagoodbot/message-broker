export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    message: {
      type: 'string',
      description: 'The message to broadcast'
    },
    image: {
      type: 'string',
      description: 'The images to show'
    },
    mentions: {
      type: 'array',
      description: 'List of users to mention',
      items: {
        type: 'object',
        description: 'Any users to mention',
        properties: {
          userId: {
            type: 'string',
            description: 'The users id'
          },
          userNickname: {
            type: 'string',
            description: 'The handle to mention'
          },
          position: {
            type: 'integer',
            description: 'Assuming the client needs to know where to place the mention - this is the position in the string to show the mention'
          }
        }
      }
    },
    pin: {
      type: 'boolean',
      description: 'Should the message be pinned'
    },
    clearPin: {
      type: 'boolean',
      description: 'Should the pinned message be cleared'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  oneOf: [
    { required: ['messageId', 'message'] },
    { required: ['messageId', 'image'] }
  ],
  additionalProperties: false
}
