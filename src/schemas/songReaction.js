import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    ...addStandard(),
    reaction: {
      type: 'string',
      description: 'The reaction received',
      enum: ['nope', 'dope', 'star', 'boofStar']
    }
  },
  required: required.concat(['reaction']),
  additionalProperties: true
}
