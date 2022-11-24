import { addStandard, required } from './components/all.js'

export default {
  type: 'object',
  properties: {
    service: {
      type: 'string',
      description: 'The service that handles the request'
    },
    command: {
      type: 'string',
      description: 'The service request to make'
    },
    arguments: {
      type: 'string',
      description: 'Any query params to pass to the external service',
      additionalProperties: true
    },
    ...addStandard()
  },
  required: required.concat(['service', 'command']),
  additionalProperties: true
}
