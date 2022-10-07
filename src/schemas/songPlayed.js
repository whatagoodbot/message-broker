export default {
  type: 'object',
  properties: {
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
  required: ['artist', 'title', 'dj', 'room'],
  additionalProperties: false
}
