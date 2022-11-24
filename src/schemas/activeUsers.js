import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    ...addStandard()
  },
  required,
  additionalProperties: true
}
