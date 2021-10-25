import PaymentModel from "../payment/PaymentModel"
import UserModel from "../users/UserModel"
import OrderStatusModel from "./OrderStatusModel"

class OrderResponseModel {
  public createAt: string = String()
  public id: number = Number()
  public paymentId: PaymentModel = new PaymentModel
  public statusId: OrderStatusModel = new OrderStatusModel
  public total: number = Number()
  public updateAt: string = String()
  public userId: UserModel = new UserModel
}

export default OrderResponseModel