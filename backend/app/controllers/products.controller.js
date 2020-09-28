const Product = require("../models/products.model")

exports.findOne = (req, res) => {
  Product.findProduct(req.params.productTitle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Product not found with keyword ${req.params.productTitle}.`
        })
      } else {
        res.status(500).send({
          message: "Error retrieving Product with title " + req.params.productTitle
        })
      }
    } else { res.send(data) }
  })
}