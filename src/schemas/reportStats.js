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
        dopes: {
          type: 'integer',
          description: 'Amount of dopes, if requested'
        },
        nopes: {
          type: 'integer',
          description: 'Amount of nopes, if requested'
        },
        stars: {
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
            description: 'The users unique identifier'
          },
          score: {
            type: 'integer',
            description: 'The users score'
          }
        }
      }
    },
    room: {
      type: 'object',
      description: 'Details about the room the message originated from',
      properties: {
        id: {
          type: 'string',
          description: 'The rooms unique identifier'
        },
        slug: {
          type: 'string',
          description: 'The room\'s unique slug'
        },
        name: {
          type: 'string',
          description: 'Display name for the room'
        },
        lastfm: {
          type: 'object',
          description: 'Configuration details fdor room specific last.fm account',
          properties: {
            enabled: {
              type: 'boolean',
              description: 'Is there a room specific last.fm account'
            },
            username: {
              type: 'string',
              description: 'last.fm account user name'
            },
            password: {
              type: 'string',
              description: 'last.fm account password'
            },
            apiKey: {
              type: 'string',
              description: 'last.fm account api key'
            },
            apiSecret: {
              type: 'string',
              description: 'last.fm account secret'
            }
          },
          required: ['enabled'],
          additionalProperties: true
        }
      },
      required: ['id', 'slug', 'lastfm'],
      additionalProperties: true
    },
    sender: {
      type: 'string',
      description: 'Either the users uuid or "system" to signify sent by the bot'
    },
    client: {
      type: 'string',
      description: 'Unique identifier for the client - allows filtering of messages by the client',
      enum: ['TTL', 'RVRB']
    },
    user: {
      type: 'object',
      description: 'User associated with the message',
      properties: {
        id: {
          type: 'string',
          description: 'The users unique identifier'
        },
        nickname: {
          type: 'string',
          description: 'The display name for the user'
        }
      },
      required: ['id', 'nickname']
    },
    nowPlaying: {
      type: 'object',
      description: 'Details about the song being played',
      properties: {
        id: {
          type: 'string',
          description: 'The songs unique identifier'
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
    },
    djs: {
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
  },
  oneOf: [
    { required: ['messageId', 'room', 'sender', 'client', 'user', 'type', 'period', 'filter', 'stats'] },
    { required: ['messageId', 'room', 'sender', 'client', 'user', 'type', 'period', 'filter', 'leaderboard'] }
  ],
  additionalProperties: false
}
