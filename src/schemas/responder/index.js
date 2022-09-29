import add from './add.js'
import get from './get.js'
import getAll from './getAll.js'
import { Validator } from '../../validator.js'

export default {
  add: {
    request: new Validator(add.request),
    response: new Validator(add.response)
  },
  get: {
    request: new Validator(get.request),
    response: new Validator(get.response)
  },
  getAll: {
    request: new Validator(getAll.request),
    response: new Validator(getAll.response)
  }
}
