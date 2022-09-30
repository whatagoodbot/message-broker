export default {
  response: {
    type: 'object',
    properties: {
      payload: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Any error raised'
          },
          message: {
            type: 'string',
            description: 'The message to broadcast about the error'
          }
        },
        required: ['error', 'message'],
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
