export default {
  type: 'object',
  properties: {
    messageId: {
      type: 'string',
      description: 'A unique identifier for the message'
    },
    userId: {
      type: 'string',
      description: 'The users unique identifier'
    },
    room: {
      type: 'string',
      description: 'The room'
    },
    stat: {
      type: 'object',
      description: 'Details of the statistics being requested',
      additionalProperties: false,
      properties: {
        type: {
          type: 'string',
          description: 'What type of statistic do you want',
          enum: ['all', 'nope', 'dope', 'star', 'spins', 'leaderboard', 'popular']
        },
        period: {
          type: 'string',
          description: 'What period should statistics be taken from - defaults to this month',
          enum: ['alltime', 'lastmonth', 'thismonth']
        },
        filter: {
          type: 'string',
          description: 'Is the statistic user or room based',
          enum: ['user', 'room']
        }
      },
      required: ['type', 'filter']
    },
    meta: {
      type: 'object',
      description: 'Any meta information passed in required to handle the response',
      additionalProperties: true
    }
  },
  required: ['messageId', 'userId', 'stat', 'room'],
  additionalProperties: false
}
