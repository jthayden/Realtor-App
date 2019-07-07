const express = require('express')

const listingApi = require('../models/listing.js')
const agentApi = require('../models/agent.js')


const listingRouter = express.Router({ mergeParams: true })

listingRouter.get('/', (req, res) => {
    listingApi.getListings()
        .then((listings) => {
            res.send(listings)
        })
        .catch((err) => {
            res.send(err)
        })
})

listingRouter.post('/', (req, res) => {
    req.body.agentId = req.params.agentId
    // console.log(req.params.agentId)
    listingApi.addListing(req.body)
        .then(() => {
            res.redirect('/agents/' + req.params.agentId)
        })
})

listingRouter.get('/new', (req, res) => {
    agentApi.getAgent(req.params.agentId)
        .then((agent) => {
            res.render('agents/newListingForm', { agentId: agent._id })
        })

})

listingRouter.get('/:listingId/edit', (req, res) => {
    listingApi.getListing(req.params.listingId)
        .then((listing) => {
            res.render('agents/editListingForm', { listing })
        })
})

listingRouter.get('/:listingId', (req, res) => {
    listingApi.getListing(req.params.listingId)
        .then((listing) => {
            res.render('agents/listing', { listing })
        })
})

listingRouter.put('/:listingId', (req, res) => {
    listingApi.updateListing(req.params.listingId, req.body)
        .then(() => {
            res.redirect('/listings/' + req.params.listingId)
        })
})

listingRouter.delete('/:listingId', (req, res) => {
    listingApi.deleteListing(req.params.listingId)
        .then(() => {
            res.redirect('/agents')
        })
})

module.exports = {
    listingRouter
}

