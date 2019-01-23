// Import our Controllers
const visitorController = require('../controllers/visitorController')

// Import Swagger documentation
const documentation = require('./documentation/visitorApi')

const routes = [
  {
    method: 'GET',
    url: '/api/visitors',
    handler: visitorController.getVisitors,
    schema: documentation.getVisitorsSchema
  },
  {
    method: 'GET',
    url: '/api/visitors/:id',
    handler: visitorController.getSingleVisitor,
    schema: documentation.getSingleVisitor
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
    handler: visitorController.updateVisitor,
    schema: documentation.updateVisitorSchema
  },
  {
    method: 'DELETE',
    url: '/api/visitors/:id',
    handler: visitorController.deleteVisitor,
    schema: documentation.deleteVisitorSchema
  }
]

module.exports = routes
