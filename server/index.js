const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const AppRouter = require("./router/AppRouter");
const passportConfig = require("./services/Passport");
const cookieSession = require("cookie-session");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

AppRouter(app);

app.listen(5000);
