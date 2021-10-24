import ProductModel from "../product/ProductModel"

class CartModel {
  public product: ProductModel = new ProductModel
  public productQuantity: number = Number()
}

export default CartModel