//Step 1
//Import mongoose connection
const mongoose = require('./connection.js')

//Step 2
//Create model schema 
const ClientSchema = new mongoose.Schema({
    name: String,
    propertyTypes: String,
    neighborhoods: String,
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

function getClient(clientId) {
    return ClientCollection.findById(clientId)
}

function updateClient(clientId, clientObject) {
    return ClientCollection.findByIdAndUpdate(clientId, clientObject)
}

function deleteClient(clientId) {
    return ClientCollection.findByIdAndDelete(clientId)
}

//Step 5
//Export all functions from this file by adding their names as keys to this object
module.exports = {
    getClientByAgentId,
    addClient,
    getClient,
    updateClient,
    deleteClient
}