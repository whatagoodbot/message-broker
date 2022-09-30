export default {
  request: {
    type: 'object',
    properties: {
      room: {
        type: 'string',
        description: 'A unique identifier for the room - commonly known as the "slug"'
      },
      meta: {
        type: 'object',
        description: 'Any meta information passed in required to handle the response',
        additionalProperties: true
      }
    },
    required: ['room'],
    additionalProperties: false
  },
  response: {
    type: 'object',
    properties: {
      payload: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'The key of the response'
            },
            message: {
              type: 'string',
              description: 'The message to broadcast'
            },
            image: {
              type: 'string',
              description: 'Any images to return as part of the broadcast'
            }
          },
          oneOf: [
            { required: ['key', 'message'] },
            { required: ['key', 'image'] }
          ],
          additionalProperties: false
        }
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
