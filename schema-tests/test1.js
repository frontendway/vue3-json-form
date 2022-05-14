const Ajv = require('ajv')
const localize = require('ajv-i18n')

const schema = {
  type: 'string',
  minLength: 10
}

const ajv = new Ajv()
const validate = ajv.compile(schema)
const valid = validate('string')


