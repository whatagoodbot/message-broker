export default {
  type: 'object',
  description: 'Details about the song being played',
  properties: {
    id: {
      type: 'string',
      description: 'The songs unique identifier'
    },
    uri: {
      type: 'string',
      description: 'The songs provider uri'
    },
    dj: {
      type: 'string',
      description: 'The id of the dj playing the song'
    },
    provider: {
      type: 'string',
      description: 'The provider used to play the song'
    },
    artist: {
      type: 'string',
      description: 'The artist performing the song'
    },
    title: {
      type: 'string',
      description: 'The title of the song'
    }
  }
}
