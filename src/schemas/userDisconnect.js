export default {
  type: 'object',
  properties: {
    userId: {
      type: 'string',
      description: 'The users unique identifier'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['userId'],
  additionalProperties: false
}
