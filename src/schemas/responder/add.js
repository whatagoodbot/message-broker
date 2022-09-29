export default {
  request: {
    type: 'object',
    properties: {
      room: {
        type: 'string',
        description: 'A unique identifier for the room - commonly known as the "slug"'
      },
      key: {
        type: 'string',
        description: 'The name of the response you would like'
      },
      type: {
        type: 'string',
        description: 'The response type. Either image or text',
        enum: ['image', 'text']
      },
      value: {
        type: 'string',
        description: 'The response to match the key'
      },
      meta: {
        type: 'object',
        description: 'Any meta information passed in required to handle the response',
        additionalProperties: true
      }
    },
    required: ['room', 'key', 'type', 'value'],
    additionalProperties: false
  },
  response: {
    type: 'object',
    properties: {
      payload: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'The message to broadcast'
          },
          image: {
            type: 'string',
            description: 'Any images to return as part of the broadcast'
          }
        },
        required: ['message'],
        additionalProperties: false
      },
      meta: {
        type: 'object',
        description: 'Any meta information passed in required to handle the response',
        additionalProperties: true
      }
    },
    required: ['payload'],
    additionalProperties: false
  }
}
