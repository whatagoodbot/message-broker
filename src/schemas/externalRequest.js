export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    service: {
      type: 'string',
      description: 'The service that handles the request'
    },
    name: {
      type: 'string',
      description: 'The service request to make'
    },
    arguments: {
      type: 'object',
      description: 'Any query params to pass to the external service',
      additionalProperties: true
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'service'],
  additionalProperties: false
}
