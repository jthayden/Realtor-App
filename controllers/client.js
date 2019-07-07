const express = require('express')

// const listingApi = require('../models/listing.js')
const clientApi = require('../models/client.js')
const agentApi = require('../models/agent.js')


const clientRouter = express.Router({ mergeParams: true })

clientRouter.post('/', (req, res) => {
    req.body.agentId = req.params.agentId
    clientApi.addClient(req.body)
        .then(() => {
            res.redirect('/agents/' + req.params.agentId)
        })
})

clientRouter.get('/new', (req, res) => {
    agentApi.getAgent(req.params.agentId)
        .then((agent) => {
            res.render('agents/newClientForm', { agentId: agent._id })
        })

})

clientRouter.get('/:clientId/edit', (req, res) => {
    clientApi.getClient(req.params.clientId)
        .then((client) => {
            res.render('agents/editClientForm', { client })
        })
})

clientRouter.get('/:clientId', (req, res) => {
    clientApi.getClient(req.params.clientId)
        .then((client) => {
            res.render('agents/client', { client })
        })
})

clientRouter.put('/:clientId', (req, res) => {
    clientApi.updateClient(req.params.clientId, req.body)
        .then(() => {
            res.redirect('/clients/' + req.params.clientId)
        })
})

clientRouter.delete('/:clientId', (req, res) => {
    clientApi.deleteClient(req.params.clientId)
        .then(() => {
            res.redirect('/agents')
        })
})

module.exports = {
    clientRouter
}

