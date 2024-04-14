const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, profile, refresh, done) => {
      console.log(profile);
      done(null, true); // yaha pe wysa ka code deko ho ge tho hum  data base se user.find kye hai ,aur mere ek aur galti serialize me user.id reutrn kar rahe tho jo available the nahi hai usko kaise return kar sakte hai
    }
  )
);
