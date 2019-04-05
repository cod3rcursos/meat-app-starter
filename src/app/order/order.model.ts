class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = []
  ) { }
}

// Model dos itens do carrinho
class OrderItem {
  constructor(public quantity: number, public menuId: string) { }
}

export { Order, OrderItem }