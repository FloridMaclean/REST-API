const express = require("express");

const routes = express.Router({
  mergeParams: true,
});

routes.get('/', (req, res) => {
  res.status(200).json({
      firstName: "Florid",
      lastName: "Maclean"
  });
});

// routes.post()

module.exports = {
  routes,
};
