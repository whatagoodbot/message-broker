import systemError from './systemError.js'
import { Validator } from '../../validator.js'

export default {
  systemError: {
    response: new Validator(systemError.response)
  }
}
