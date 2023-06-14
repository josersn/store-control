import { TransactionDTO } from "../dtos/transactionDTO";

interface ITransactionRepository {
  create(data: TransactionDTO): Promise<TransactionDTO>;
}

export { ITransactionRepository };
