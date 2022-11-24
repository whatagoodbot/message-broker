import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      description: 'The name of the response you would like'
    },
    category: {
      type: 'string',
      description: 'The response category.',
      enum: ['general', 'sentience', 'system', 'userGreeting', 'roomGreeting', 'songChoice', 'artistChoice', 'badgeReaction']
    },
    ...addStandard()
  },
  required: required.concat(['category', 'key']),
  additionalProperties: true
}
