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
      type: 'string',
      description: 'Who played the song'
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
