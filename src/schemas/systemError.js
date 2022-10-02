export default {
  type: 'object',
  properties: {
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
  required: ['errors', 'message'],
  additionalProperties: false
}
