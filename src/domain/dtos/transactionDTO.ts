import { PaymentMethod } from "../enums/paymentMethod";
import { TransactionType } from "../enums/transactionType";

interface TransactionDTO {
  id?: number;
  value: number;
  transactionType: TransactionType;
  paymentMethod: PaymentMethod;
}

export { TransactionDTO };
