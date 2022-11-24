export default {
  type: 'object',
  description: 'User associated with the message',
  properties: {
    name: {
      type: 'string',
      description: 'Unique identifier for the client - allows filtering of messages by the client',
      enum: ['goodbot-ttl', 'client-rvrb']
    },
    richText: {
      type: 'boolean',
      description: 'Does the client support rich text'
    }
  }
}
