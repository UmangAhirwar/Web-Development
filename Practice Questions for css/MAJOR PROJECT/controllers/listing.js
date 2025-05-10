const Listing = require("../models/listing")

module.exports.index = async (req, res)=>{
    
    const allListings = await Listing.find({}); // Stored the data inside a variable 
    res.render("listings/index.ejs", {allListings}); //Passed the variable to index.ejs

}

module.exports.renderNewForm = (req, res)=>{ 
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => { //to get the the url encoded data we need to parse it 
    
    let { id } = req.params; 
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner"); // Storing the data by finding its appropriate id 
    if(!listing){
        req.flash("error", "Listing not exists!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing}); // parsing the data to the show.ejs file
    console.log(listing);
    
}

module.exports.createListing = async (req, res, next)=>{ 
        
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created!")
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {

    let { id } = req.params; 
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested does not exists");
        res.redirect('/listings');
    }
    res.render("listings/edit.ejs", {listing});

}

module.exports.updateListing = async (req, res) => {

    let { id } = req.params; 
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);

}

module.exports.destroyListing = async (req, res) => {
    
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log('deletedListing:', deletedListing);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
    
}