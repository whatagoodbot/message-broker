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
        // images: {
        //   type: 'array',
        //   description: 'The images to show'
        // },
        // mentions: {
        //   type: 'object',
        //   description: 'Any users to mention',
        //   properties: {
        //     handle: {
        //       type: 'string',
        //       description: 'The handle to mention'
        //     },
        //     position: {
        //       type: 'integer',
        //       description: 'Assuming the client needs to know where to place the mention - this is the position in the string to show the mention'
        //     }        
        //   }
        // }
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
