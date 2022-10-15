export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    errors: {
      type: ['string', 'array'],
      description: 'Any error(s) raised'
    },
    message: {
      type: 'string',
      description: 'The message to broadcast about the error'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'errors', 'message'],
  additionalProperties: false
}
