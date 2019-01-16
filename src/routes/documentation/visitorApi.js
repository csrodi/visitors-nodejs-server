exports.addVisitorSchema = {
  description: 'Create a new visitor',
  tags: ['visitors'],
  summary: 'Creates new visitor with given values',
  body: {
    type: 'object',
    properties: {
      lastName: { type: 'string' },
      firstName: { type: 'string' },
      phoneNumber: { type: 'string' },
      email: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        lastName: { type: 'string' },
        firstName: { type: 'string' },
        phoneNumber: { type: 'string' },
        email: { type: 'string' },
        __v: { type: 'number' }
      }
    }
  }
}
