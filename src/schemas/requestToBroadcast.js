export default {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'The message to broadcast'
    },
    image: {
      type: 'string',
      description: 'The images to show'
    },
    mentions: {
      type: 'object',
      description: 'Any users to mention',
      properties: {
        handle: {
          type: 'string',
          description: 'The handle to mention'
        },
        position: {
          type: 'integer',
          description: 'Assuming the client needs to know where to place the mention - this is the position in the string to show the mention'
        }
      }
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['message'],
  additionalProperties: false
}
