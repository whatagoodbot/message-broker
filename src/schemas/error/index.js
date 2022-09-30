import error from './error.js'
import { Validator } from '../../validator.js'

export default {
  error: {
    response: new Validator(error.response)
  }
}
