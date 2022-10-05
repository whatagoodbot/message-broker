export default {
  type: 'object',
  properties: {
    room: {
      type: 'string',
      description: 'A unique identifier for the room - commonly known as the "slug"'
    },
    user: {
      type: 'string',
      description: 'A unique identifier for the user - normally a UUID'
    },
    key: {
      type: 'string',
      description: 'The name of the response you would like'
    },
    category: {
      type: 'string',
      description: 'The response category.',
      enum: ['general', 'sentience', 'system', 'greeting']
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['key', 'category'],
  additionalProperties: false
}
