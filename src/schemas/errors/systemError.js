export default {
  response: {
    type: 'object',
    properties: {
      payload: {
        type: 'object',
        properties: {
          errors: {
            type: ['string', 'array'],
            description: 'Any error(s) raised'
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
