import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    value: {
      type: 'string',
      description: 'The response to match the key'
    },
    ...addStandard()
  },
  required: required.concat(['value']),
  additionalProperties: true
}
