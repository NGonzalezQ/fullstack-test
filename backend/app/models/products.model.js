const sql = require("./db")

const Product = function (product) {
  this.id = product.id
  this.title = product.title
}

Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return
    }

    if (res.length) {
      console.log("found product: ", res[0])
      result(null, res[0])
      return
    }

    result({ kind: "not_found" }, null)
  })
}

Product.findProduct = (productTitle, result) => {
  sql.query(`SELECT * FROM example.products WHERE title regexp '[[:<:]]${productTitle}[[:>:]]'`, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return
    }

    // if (res.length) {
    //   console.log("found product: ", res[0])
    //   result(null, res[0])
    //   return
    // }

    // result({ kind: "not_found" }, null)
    result(null, res)
  })
}

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    console.log("products: ", res)
    result(null, res)
  })
}

module.exports = Product