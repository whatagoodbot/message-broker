import Ajv from 'ajv'
const ajv = new Ajv({ allErrors: true })

export class Validator {
  constructor (schema) {
    this.schemaValidator = ajv.compile(schema)
  }

  validate (data) {
    const isValid = this.schemaValidator(data)
    if (isValid) {
      return {
        error: false,
        data
      }
    }
    return {
      error: true,
      errors: this.schemaValidator.errors
    }
  }
}
