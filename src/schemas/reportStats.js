export default {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      description: 'The type of statistics requested'
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
        }
      }
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['stats'],
  additionalProperties: false
}
