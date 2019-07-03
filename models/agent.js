//Place all functions, classes, and/or DB schemas here for a single model.

//Step 1
//Import mongoose connection
const mongoose = require('./connection.js')

//Step 2
//Create model schema 
const AgentSchema = new mongoose.Schema({
 name: String,
 specialty: String,
 areasServed: String,
 team: {},
})

//Step 3
//Create collection API
const AgentCollection = mongoose.model('Agent', AgentSchema)

//Step 4
//Functions
function getAgents() {
  return AgentCollection.find()
}

function addAgent(agentObject) {
    return AgentCollection.create(agentObject)
}

function getAgent(agentId) {
    return AgentCollection.findById(agentId)
}

function updateAgent(agentId, agentObject) {
    return AgentCollection.findByIdAndUpdate(agentId, agentObject)
}

function deleteAgent(agentId) {
    return AgentCollection.findByIdAndDelete(agentId)
}

//Step 5
//Export all functions from this file by adding their names as keys to this object
module.exports = {
  getAgents,
  addAgent,
  getAgent,
  updateAgent,
  deleteAgent

}
