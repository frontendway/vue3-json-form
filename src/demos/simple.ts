export default {
  name: 'Simple',
  schema: {
    type: 'object',
    description: 'A simple form example',
    required: [ 'firstName', 'lastName' ],
    properties: {
      // firstName: {
      //   type: 'string',
      //   default: 'Chunk'
      // },
      // lastName: { type: 'string' },
      // telephone: {
      //   type: 'string',
      //   minLength: 10
      // },
      // staticArray: {
      //   type: 'array',
      //   items: [
      //     { type: 'string' },
      //     { type: 'number' }
      //   ]
      // },
      testSingleArr: { 
        type: 'array',
        items: { type: 'number' }
      }
    }
  },
  uiSchema: {
    title: 'A registration form',
    properties: {
      firstName: { title: 'First name' },
      lastName: { title: 'Last name' },
      telephone: { title: 'Telephone' }
    }
  },
  default: {
    firstName: 'Chunk',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
    testSingleArr: [ 11, 22 ]
  }
}
