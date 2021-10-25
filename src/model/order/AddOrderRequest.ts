class AddOrderRequest {
  public userId: number = Number()
  public paymentId: number = Number()
  public total: number = Number()
}

export default AddOrderRequest