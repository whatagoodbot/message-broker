export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    type: {
      type: 'string',
      description: 'The type of statistics requested'
    },
    period: {
      type: 'string',
      description: 'The period of statistics requested'
    },
    filter: {
      type: 'string',
      description: 'The filter of statistics requested'
    },
    stats: {
      type: 'object',
      description: 'The actual stastics',
      additionalProperties: false,
      properties: {
        spins: {
          type: 'integer',
          description: 'Amount of spins, if requested'
        },
        dope: {
          type: 'integer',
          description: 'Amount of dopes, if requested'
        },
        nope: {
          type: 'integer',
          description: 'Amount of nopes, if requested'
        },
        star: {
          type: 'integer',
          description: 'Amount of stars, if requested'
        },
        popular: {
          type: 'object',
          description: 'The popular spin',
          properties: {
            titleArtist: {
              type: 'string',
              description: 'The artist and song title that was most popular'
            },
            score: {
              type: 'integer',
              description: 'The score for the most popular'
            }
          }
        }
      }
    },
    leaderboard: {
      type: 'array',
      description: 'The type of statistics requested',
      items: {
        type: 'object',
        properties: {
          user: {
            type: 'string',
            description: 'The users uniqueu identifier'
          },
          score: {
            type: 'integer',
            description: 'The users score'
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
  oneOf: [
    { required: ['messageId', 'stats'] },
    { required: ['messageId', 'leaderboard'] }
  ],
  additionalProperties: false
}
