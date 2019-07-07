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

function getListing(listingId) {
    return ListingCollection.findById(listingId)
}

function updateListing(listingId, listingObject) {
    return ListingCollection.findByIdAndUpdate(listingId, listingObject)
}

function deleteListing(listingId) {
    return ListingCollection.findByIdAndDelete(listingId)
}

module.exports = {
    getListingByAgentId,
    addListing,
    getListings,
    getListing,
    updateListing,
    deleteListing
}