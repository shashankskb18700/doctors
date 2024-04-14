const passport = require("passport");

const AppRouter = (app) => {
  app.get("/", (req, res) => {
    res.send("hi sir hope you will become more focused");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      // session: false,
    }),
    (req, res) => {
      res.send("logged in buddy");
    }
  );

  app.get("api/logout", (req, res) => {
    req.logout();
  });
};

module.exports = AppRouter;
