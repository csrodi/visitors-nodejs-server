// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Authentication stuff
const authenticate = {realm: 'Visitors'}
fastify.register(require('fastify-auth'))
fastify.register(require('fastify-basic-auth'), { validate, authenticate })
async function validate (username, password, req, reply) {
  if (username !== 'visitor' || password !== 'visitor') {
    return new Error('Bad credentials!')
  }
}

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
mongoose.connect('mongodb://192.168.99.100/visitors')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Use preHandler to authenticate all the routes
fastify.after(() => fastify.addHook('preHandler', fastify.auth([fastify.basicAuth])))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
