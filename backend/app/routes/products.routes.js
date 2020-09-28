module.exports = app => {
  const products = require("../controllers/products.controller")

  app.get("/search/:productTitle", products.findOne)
}