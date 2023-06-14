import { TransactionDTO } from "../dtos/transactionDTO";

interface ITransactionRepository {
  create(data: TransactionDTO): Promise<TransactionDTO>;
  findByDate(
    initial: string | Date,
    end: string | Date
  ): Promise<TransactionDTO[]>;
}

export { ITransactionRepository };
