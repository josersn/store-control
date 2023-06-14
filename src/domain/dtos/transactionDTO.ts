import { PaymentMethod, TransactionType } from "@prisma/client";

interface TransactionDTO {
  id?: number;
  value: number;
  transactionType: TransactionType;
  paymentMethod: PaymentMethod;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export { TransactionDTO };
