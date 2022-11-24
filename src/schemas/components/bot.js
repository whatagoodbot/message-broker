export default {
  type: 'object',
  description: 'Details about the room bot',
  properties: {
    isDj: {
      type: 'boolean',
      description: 'is the bot currently DJing?'
    }
  },
  required: ['isDj'],
  additionalProperties: true
}
