class ProductsRequestModel {
  public elementPerPage: number = Number()
  public sortBy: string = String()
  public page: number = Number()
  public orderBy: string = String()
  public categoryId: number = Number()
}
export default ProductsRequestModel