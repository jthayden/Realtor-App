const express = require('express')

// const listingApi = require('../models/listing.js')
const clientApi = require('../models/client.js')
const agentApi = require('../models/agent.js')


const clientRouter = express.Router({ mergeParams: true })

clientRouter.get('/new', (req, res) => {
    agentApi.getAgent(req.params.agentId)
        .then((agent) => {
            res.render('agents/newClientForm', { agentId: agent._id })
        })

})



clientRouter.post('/', (req, res) => {
    req.body.agentId = req.params.agentId
    clientApi.addClient(req.body)
        .then(() => {
            res.redirect('/agents/' + req.params.agentId)
        })
})

module.exports = {
    clientRouter
}

