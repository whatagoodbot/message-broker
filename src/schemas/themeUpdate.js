export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    currentTheme: {
      type: 'string',
      description: 'The theme currently being used'
    },
    nextTheme: {
      type: 'string',
      description: 'The theme queued up to play next'
    },
    leader: {
      type: 'string',
      description: 'User id for theme leader'
    },
    caboose: {
      type: 'string',
      description: 'User id for theme caboose'
    },
    trigger: {
      type: 'string',
      description: 'What triggered the update',
      enum: ['current', 'start', 'stop', 'skip', 'djChange']
    },
    pin: {
      type: 'boolean',
      description: 'Should the message be pinned'
    },
    clearPin: {
      type: 'boolean',
      description: 'Should the pinned message be cleared'
    },
    themeWinner: {
      type: 'string',
      description: 'Who got the highest score for the theme'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'currentTheme', 'nextTheme', 'leader', 'caboose', 'trigger'],
  additionalProperties: false
}
