import { TransactionDTO } from "../dtos/transactionDTO";

interface ITransactionRepository {
  create(data: TransactionDTO): Promise<TransactionDTO>;
  findBy(data: any): Promise<TransactionDTO | TransactionDTO[] | undefined>;
}

export { ITransactionRepository };
