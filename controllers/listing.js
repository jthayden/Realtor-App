const express = require('express')

const listingApi = require('../models/listing.js')
const agentApi = require('../models/agent.js')


const listingRouter = express.Router({mergeParams: true})

listingRouter.get('/', (req, res) => {
    listingApi.getListings()
        .then((listings) => {
            res.send(listings)
        })
        .catch((err) => {
            res.send(err)
        })
})

listingRouter.get('/new', (req, res) => {
    // req.body.agentId = req.params.agentId   
    console.log(req.params.agentId)
    agentApi.getAgent(req.params.agentId)
    .then((agentId) => {
            res.render('agents/newListingForm', { agentId: agentId })
        })
    
        })


        // agentApi.getAgent(req.params.agentId)
        // .then((agent) => {
        //     res.render('agents/editAgentForm', { agent })
        // })




listingRouter.post('/', (req, res) => {
    req.body.agentId = req.params.agentId
    // console.log(req.params.agentId)
    listingApi.addListing(req.body)
        .then(() => {
            res.redirect('agents/singleAgent')
        })
})

module.exports = {
    listingRouter
}

