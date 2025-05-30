const User = require("../models/user");

module.exports.renderSignUp = (req, res) => {
    res.render("users/signup.ejs");
}
module.exports.signUp = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        console.log('registeredUser:', registeredUser);
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", `Welcome ${username}`);
            res.redirect("/listings");
        })
        
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}



module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}


module.exports.login = async(req, res) => {
      req.flash("success", "Welcome back to WanderLust");
      let redirectUrl = res.locals.redirectUrl || "/listings";
      res.redirect(redirectUrl);
    }


module.exports.logout =  (req, res, next)=>{
        req.logout((err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Logged out.");
            res.redirect("/listings");
        })
    } 