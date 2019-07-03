//Place all functions, classes, and/or DB schemas here for a single model.

//Step 1
//Import mongoose connection
const mongoose = require('./connection.js')

//Step 2
//Create model schema 
const ClientSchema = new mongoose.Schema({
 name: String,
 propertyType: String,
 priceRange: String,
 beds: Number,
 baths: Number,
 email: String,
 phone: String,
 agentId: { type:mongoose.Types.ObjectId, required: true}
})

//Step 3
//Create collection API
const ClientCollection = mongoose.model('Client', ClientSchema)

//Step 4
//Functions
function getClientByAgentId(agentId) {
    return ClientCollection.find({ agentId: agentId  })
}

function addClient(clientObject) {
    return ClientCollection.create(clientObject)
}

//Step 5
//Export all functions from this file by adding their names as keys to this object
module.exports = {
  getClientByAgentId,
  addClient
}