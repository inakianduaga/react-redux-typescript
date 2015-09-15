module IOrder {

  export interface Order {
    firstName: string,
    lastName: string,
    email: string,
    orderNumber: string,
    amount: number,
    taxRate: number
    shipping: Shipping,
    items: Item[],
    discounts: Discount[]
  };

  export interface Item {
    sku: string,
    name: string,
    quantity: number,
    amount: number,
  };

  export interface Shipping {
    provider: string,
    type: string,
    amount: number,
  };

  export interface Discount {
    name: string,
    amount: number,
    isPercent: boolean,
  };

}

export = IOrder;