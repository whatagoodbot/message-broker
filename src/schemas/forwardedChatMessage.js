import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    chatMessage: {
      type: 'string',
      description: 'The message to broadcast'
    },
    ...addStandard()
  },
  required: required.concat(['chatMessage']),
  additionalProperties: true
}
