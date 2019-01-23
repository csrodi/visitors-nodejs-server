exports.getVisitorsSchema = {
  description: 'Get all visitors',
  tags: ['visitors'],
  summary: 'Gets a list that contains all existing visitors',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
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
}

exports.getSingleVisitor = {
  description: 'Get a single visitor',
  tags: ['visitors'],
  summary: 'Get values for a single visitor',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'visitor id'
      }
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

exports.updateVisitorSchema = {
  description: 'Update an existing visitor',
  tags: ['visitors'],
  summary: 'Updates an existing visitor with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'visitor id'
      }
    }
  },
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

exports.deleteVisitorSchema = {
  description: 'Delete an existing visitor',
  tags: ['visitors'],
  summary: 'Delete an existing visitor',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'visitor id'
      }
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
