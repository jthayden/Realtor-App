const express = require('express')

const listingApi = require('../models/listing.js')

const listingRouter = express.Router({mergeParams: true})

listingRouter.get('/new', (req, res) => {
    res.render('listings/newListingForm')
})

listingRouter.post('/', (req, res) => {
    req.body.agentId = req.params.agentId
    listingApi.addListing(req.body)
        .then(() => {
            res.send('Listing Created')
        })
})

module.exports = {
    listingRouter
}

