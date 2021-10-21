import ProductModel from "./ProductModel"

class ProductsResponseModel {
  public page: number = Number()
  public isFirst: boolean = Boolean()
  public isLast: boolean = Boolean()
  public totalPage: number = Number()
  public products: Array<ProductModel> = new Array<ProductModel>()
}
export default ProductsResponseModel
