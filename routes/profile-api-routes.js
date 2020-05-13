var db = require("../models");

module.exports = function(app) {
  // Get all profiles
  app.get("/api/profiles", function(req, res) {
    db.profile.findAll({}).then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });

  // get by name
  app.get("/api/profiles/name/:name", function(req, res) {
    if (req.params.name) {
      // Display the JSON for ONLY that profile.
      db.profile.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(dbProfiles) {
        return res.json(dbProfiles);
      });
    }
  });

  // get by id
  app.get("/api/profiles/id/:id", function(req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that profile.
      db.profile.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(dbProfiles) {
        return res.json(dbProfiles);
      });
    }
  });

  // get by author
  app.get("/api/profiles/author/:author", function(req, res) {
    if (req.params.author) {
      // Display the JSON for ONLY that profile.
      db.profile.findAll({
        where: {
          author: req.params.author
        }
      }).then(function(dbProfiles) {
        return res.json(dbProfiles);
      });
    }
  });

  // Create a new profile
  app.post("/api/profiles", function(req, res) {
    console.log(req.body);
    db.profile.create({
      name: req.body.name,
      author: req.body.author,
      image_URL: req.body.image_URL
    }).then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });

  // Delete a profile by id
  app.delete("/api/profiles/:id", function(req, res) {
    db.profile.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });
};
