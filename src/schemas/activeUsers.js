export default {
  type: 'object',
  properties: {
    room: {
      type: 'object',
      description: 'Details about the room the message originated from',
      properties: {
        slug: {
          type: 'string',
          description: 'The room\'s unique slug'
        },
        name: {
          type: 'string',
          description: 'The room\'s name'
        }
      },
      required: ['slug'],
      additionalProperties: true
    },
    client: {
      type: 'string',
      description: 'Unique identifier for the client - allows filtering of messages by the client',
      enum: ['goodbot-ttl', 'RVRB', 'client-rvrb']
    },
    users: {
      type: 'array',
      description: 'List of DJ slots in the room',
      items: {
        type: 'object',
        description: 'Individual User',
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
          }
        }
      }
    },
    bot: {
      type: 'object',
      description: 'Details about the room bot',
      properties: {
        isDj: {
          type: 'boolean',
          description: 'is the bot currently DJing?'
        }
      },
      required: ['isDj'],
      additionalProperties: true
    }
  },
  required: ['room', 'client', 'users'],
  additionalProperties: true
}
