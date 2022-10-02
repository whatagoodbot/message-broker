import Ajv from 'ajv'
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })

export class Validator {
  constructor (schema) {
    this.schemaValidator = ajv.compile(schema)
  }

  validate (data) {
    const isValid = this.schemaValidator(data)
    console.log('isValid', isValid)
    console.log(data)
    if (isValid) {
      return data
    }
    return {
      errors: this.schemaValidator.errors
    }
  }
}
