export default {
  type: 'object',
  properties: {
    room: {
      type: 'string',
      description: 'A unique identifier for the room - commonly known as the "slug"'
    },
    nickname: {
      type: 'string',
      description: 'The handle the user goes by - used for greetings'
    },
    key: {
      type: 'string',
      description: 'The name of the response you would like'
    },
    prefix: {
      type: 'string',
      description: 'Text to prepend to the response message'
    },
    suffix: {
      type: 'string',
      description: 'Text to append to the response message'
    },
    category: {
      type: 'string',
      description: 'The response category.',
      enum: ['general', 'sentience', 'system', 'userGreeting', 'roomGreeting', 'songChoice', 'artistChoice', 'badgeReaction']
    },
    position: {
      type: 'integer',
      description: 'If multiple records are returned, which one should be selected (Defaults to random)'
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
