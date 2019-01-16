// Import our Controllers
const visitorController = require('../controllers/visitorController')

// Import Swagger documentation
const documentation = require('./documentation/visitorApi')

const routes = [
  {
    method: 'GET',
    url: '/api/visitors',
    handler: visitorController.getVisitors
  },
  {
    method: 'GET',
    url: '/api/visitors/:id',
    handler: visitorController.getSingleVisitor
  },
  {
    method: 'POST',
    url: '/api/visitors',
    handler: visitorController.addVisitor,
    schema: documentation.addVisitorSchema
  },
  {
    method: 'PUT',
    url: '/api/visitors/:id',
    handler: visitorController.updateVisitor
  },
  {
    method: 'DELETE',
    url: '/api/visitors/:id',
    handler: visitorController.deleteVisitor
  }
]

module.exports = routes
