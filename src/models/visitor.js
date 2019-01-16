// External Dependancies
const mongoose = require('mongoose')

const visitorSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  phoneNumber: String,
  email: String
})

module.exports = mongoose.model('Visitor', visitorSchema)
