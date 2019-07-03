const mongoose = require('./connection.js')

const ListingSchema = new mongoose.Schema({
    address: String,
    neighborhood: String,
    beds: Number,
    baths: Number,
    squareFootage: Number,
    price: Number,
    agentId: { type:mongoose.Types.ObjectId, required:true }
})

const ListingCollection = mongoose.model('Listing', ListingSchema)

function getListings() {
    return ListingCollection.find()
  }

function getListingByAgentId(agentId) {
    return ListingCollection.find({ agentId: agentId  })
}

function addListing(listingObject) {
    return ListingCollection.create(listingObject)
}

module.exports = {
    getListingByAgentId,
    addListing,
    getListings
}