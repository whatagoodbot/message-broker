export default {
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
}
