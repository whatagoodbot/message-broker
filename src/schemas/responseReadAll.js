import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    category: {
      type: 'string',
      description: 'The response category.',
      enum: ['general', 'sentience', 'system', 'userGreeting', 'roomGreeting', 'songChoice', 'artistChoice', 'badgeReaction']
    },
    value: {
      type: 'string',
      description: 'The response to match the key'
    },
    // TODO used for repeating commands - do we need this if we move the broadcast into service-command-reader?
    position: {
      type: 'integer',
      description: 'If multiple records are returned, which one should be selected (Defaults to random)'
    },
    ...addStandard()
  },
  required: required.concat(['category']),
  additionalProperties: true
}
