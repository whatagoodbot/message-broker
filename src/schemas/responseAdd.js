export default {
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
      description: 'The response type.',
      enum: ['image', 'text']
    },
    category: {
      type: 'string',
      description: 'The response category.',
      enum: ['general', 'sentience', 'system', 'greeting']
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
  required: ['room', 'key', 'type', 'value', 'category'],
  additionalProperties: false
}
