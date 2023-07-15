const Cart = require('../models/Cart')
const {sendResponseError} = require('../middleware/middleware')

const getCartProducts = async (req, res) => {
  try {
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
  console.log("carts",carts)
    res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

const addProductInCart = async (req, res) => {
  const {productId, count} = req.body
  try {
    const cart = await Cart.findOneAndUpdate(
      {productId},
      {productId, count, userId: req.user._id},
      {upsert: true},
    )

    res.status(201).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
const deleteProductInCart = async (req, res) => {
  try {
    if(req.params.id !== undefined){
      console.log("req.params.id",req.params.id);
      await Cart.findByIdAndRemove(req.params.id)
    }
    res.status(200).send({status: 'ok'})
  } catch (e) {
    console.log(e)
    sendResponseError(500, `Error ${e}`, res)
  }
}
module.exports = {addProductInCart, deleteProductInCart, getCartProducts}
