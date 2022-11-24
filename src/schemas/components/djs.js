export default {
  type: 'array',
  description: 'List of DJ slots in the room',
  items: {
    type: 'object',
    description: 'Individual DJ slot',
    properties: {
      userId: {
        type: 'string',
        description: 'The users unique identifier'
      },
      nickname: {
        type: 'string',
        description: 'The provider used to play the song'
      },
      isBot: {
        type: 'boolean',
        description: 'Is the current DJ a bot?'
      },
      nextTrack: {
        type: 'object',
        description: 'The next track lined up to play',
        properties: {
          id: {
            type: 'string',
            description: 'The song id'
          },
          musicProvider: {
            type: 'string',
            description: 'The provider the song will come from'
          },
          artistName: {
            type: 'string',
            description: 'The name of the artist performing the song'
          },
          trackName: {
            type: 'string',
            description: 'The song title'
          },
          additionalProperties: true
        }
      }
    }
  }
}
