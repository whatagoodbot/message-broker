export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    artist: {
      type: 'string',
      description: 'The artist for the song'
    },
    title: {
      type: 'string',
      description: 'The title of the song'
    },
    dj: {
      type: 'object',
      description: 'Who played the song',
      properties: {
        userId: {
          type: 'string',
          description: 'The users unique identifier'
        },
        nickname: {
          type: 'string',
          description: 'The handle the user goes by'
        },
        isBot: {
          type: 'boolean',
          description: 'Is it a bot DJ'
        }
      },
      required: ['userId', 'nickname']
    },
    details: {
      type: 'object',
      description: 'Additional details about the song',
      properties: {
        id: {
          type: 'string',
          description: 'The songs unique identifier'
        },
        provider: {
          type: 'string',
          description: 'The provider used to play the song'
        }
      },
      required: ['id']
    },
    room: {
      type: 'string',
      description: 'The room the song is playing in'
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'artist', 'title', 'dj', 'room', 'details'],
  additionalProperties: false
}
