export default {
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
}
