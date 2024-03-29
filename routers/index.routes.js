// const { multerUploads } = require("../middleware/multer");
const {
  authorize,
  verifyToken,
  authorizeUpdated,
} = require("../middleware/authJwt");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.use(
    "/api/v1/role",
    [verifyToken, authorizeUpdated(["can-mgt-role"])],
    require("./role.routes")
  );
  
  app.use("/api/v1/userManagement", require("./userManagement.routes"));
  app.use("/api/v1", require("./default.routes"));
  app.use("/api/v1/devotion",  require("./devotion.routes"));
  app.use("/api/v1/profile", [verifyToken], require("./profile.routes"));
  app.use("/api/v1/role", [verifyToken], require("./role.routes"));
  app.use("/api/v1/testimony", [verifyToken], require("./testimony.routes"));
  app.use("/api/v1/file", [verifyToken], require("./file.routes"));

};
