import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'The message to broadcast'
    },
    image: {
      type: 'string',
      description: 'The images to show'
    },
    mentions: {
      type: 'array',
      description: 'List of users to mention',
      items: {
        type: 'object',
        description: 'Any users to mention',
        properties: {
          userId: {
            type: 'string',
            description: 'The users id'
          },
          userNickname: {
            type: 'string',
            description: 'The handle to mention'
          },
          position: {
            type: 'integer',
            description: 'Assuming the client needs to know where to place the mention - this is the position in the string to show the mention'
          }
        }
      }
    },
    pin: {
      type: 'boolean',
      description: 'Should the message be pinned'
    },
    ...addStandard()
  },
  required,
  additionalProperties: true
}
