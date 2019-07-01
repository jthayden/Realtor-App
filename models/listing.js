const mongoose = require('./connection.js')

const ListingSchema = new mongoose.Schema({
    address: String,
    neighborhood: String,
    beds: Number,
    baths: Number,
    squareFootage: Number,
    price: Number,
    agentId: mongoose.Types.ObjectId
})

const ListingCollection = mongoose.model('Listing', ListingSchema)

function getListingByAgentId(agentId) {
    return ListingCollection.find({ agentId: agentId })
}

function addListing(listingObject) {
    return ListingCollection.create(listingObject)
}

module.exports = {
    getListingByAgentId,
    addListing
}