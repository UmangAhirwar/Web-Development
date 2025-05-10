const mongoose = require("mongoose");
const Schema = mongoose.Schema; //To avoid writing mongoose.Schema again and again
const Review = require("./review.js")

const listingSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: {
            url: String,
            // You can add other fields like `filename`, `altText`, etc.
        },
        default: () => ({
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }),
        set: function(v) {
            // If `v` is an empty string or falsy, return the default URL
            if (!v || (typeof v === 'object' && !v.url)) {
                return {
                    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                };
            }
            // If `v` is a string, treat it as the URL
            if (typeof v === 'string') {
                return { url: v };
            }
            // Otherwise, assume `v` is an object with a `url` field
            return v;
        }
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});


// Code to delete listing with reviews
listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({ _id: { $in: listing.reviews}})
    }
});


//Called the mongoose.model function inside a variable and then passed it to the modules.export
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

