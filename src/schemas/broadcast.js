export default {
  type: 'object',
  properties: {
    response: {
      type: 'object',
      description: 'The response from the external service - will contain ',
      properties: {
        message: {
          type: 'string',
          description: 'The message to broadcast'
        },
        image: {
          type: 'string',
          description: 'The images to show'
        },
        mention: {
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
      additionalProperties: false
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['response'],
  additionalProperties: false
}
