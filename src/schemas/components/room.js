export default {
  type: 'object',
  description: 'Details about the room the message originated from',
  properties: {
    id: {
      type: 'string',
      description: 'The room\'s unique id'
    },
    name: {
      type: 'string',
      description: 'The room\'s name'
    }
  },
  required: ['id'],
  additionalProperties: true
}
