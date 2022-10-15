export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    action: {
      type: 'string',
      description: 'The quickt theme action to take',
      enum: ['current', 'start', 'stop', 'skip', 'djChange']
    },
    djs: {
      type: 'array',
      description: 'The current djs and their queue positions',
      items: {
        type: 'object',
        properties: {
          user: {
            type: 'string',
            description: 'The users unique identifier'
          },
          position: {
            type: 'integer',
            description: 'The queue position of the dj'
          },
          isPlaying: {
            type: 'boolean',
            description: 'Is the dj on deck and currently playing their song'
          }
        }
      }
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'action'],
  additionalProperties: false
}
