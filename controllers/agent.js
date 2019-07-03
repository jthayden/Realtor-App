//Step 1 import express
const express = require('express')

//Step 2
//Import the api files from the models
const agentApi = require('../models/agent.js')
const listingApi = require('../models/listing.js')
const clientApi = require('../models/client.js')

//Step 3 
//Create a new router.
const agentRouter = express.Router({mergeParams: true})

//Step 4
//Put all request handlers here
agentRouter.get('/', (req, res) => {
    agentApi.getAgents()
        .then((agents) => {
            res.render('agents/agents', { agents })
        })
        .catch((err) => {
            res.send(err)
        })
})

agentRouter.post('/', (req, res) => {
    agentApi.addAgent(req.body)
        .then(() => {
            res.redirect('/agents')
        })
        .catch((err) => {
            res.send(err)
        })
})

agentRouter.get('/new', (req, res) => {
    res.render('agents/newAgentForm')
})

agentRouter.get('/:agentId/edit', (req, res) => {
    agentApi.getAgent(req.params.agentId)
        .then((agent) => {
            res.render('agents/editAgentForm', { agent })
        })
})

agentRouter.get('/:agentId', (req, res) => {
    agentApi.getAgent(req.params.agentId)
        .then((agent) => {
            listingApi.getListingByAgentId(agent._id)
                .then((listing) => {
                    clientApi.getClientByAgentId(agent._id)
                        .then((client) => {
                            res.render('agents/singleAgent', { agent, listing, client })
                        })
                    
                })  
        })
        .catch((err) => {
            res.send(err)
        })
})

agentRouter.put('/:agentId', (req, res) => {
    agentApi.updateAgent(req.params.agentId, req.body)
        .then(() => {
            res.redirect('/agents')
        })
        .catch((err) => {
            res.send(err)
        })
})

agentRouter.delete('/:agentId', (req, res) => {
    agentApi.deleteAgent(req.params.agentId)
        .then(() => {
            res.redirect('/agents')
        })
        .catch((err) => {
            res.send(err)
        })
})

//Step 6
//Export the router from the file.
module.exports = {
    agentRouter
}
