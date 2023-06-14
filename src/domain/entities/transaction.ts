import { PaymentMethod } from "../enums/paymentMethod";
import { TransactionType } from "../enums/transactionType";

class Transaction {
  id: number;
  value: number;
  transactionType: TransactionType;
  paymentMethod: PaymentMethod;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { Transaction };
