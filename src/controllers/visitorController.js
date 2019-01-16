// External Dependancies
const boom = require('boom')

// Get Data Models
const Visitor = require('../models/visitor')

// Get all visitors
exports.getVisitors = async (req, reply) => {
  try {
    const visitors = await Visitor.find()
    return visitors
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single visitor by ID
exports.getSingleVisitor = async (req, reply) => {
  try {
    const id = req.params.id
    const visitor = await Visitor.findById(id)
    return visitor
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new visitor
exports.addVisitor = async (req, reply) => {
  try {
    const visitor = new Visitor(req.body)
    return visitor.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing visitor
exports.updateVisitor = async (req, reply) => {
  try {
    const id = req.params.id
    const visitor = req.body
    const { ...updateData } = visitor
    const update = await Visitor.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a visitor
exports.deleteVisitor = async (req, reply) => {
  try {
    const id = req.params.id
    const visitor = await Visitor.findByIdAndRemove(id)
    return visitor
  } catch (err) {
    throw boom.boomify(err)
  }
}
