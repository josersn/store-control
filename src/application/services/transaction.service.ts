import { TransactionDTO } from "../../domain/dtos/transactionDTO";

interface ITransactionService {
  create(data: TransactionDTO): Promise<TransactionDTO>;
}

class TransactionService implements ITransactionService {
  async create(data: TransactionDTO): Promise<TransactionDTO> {
    return {
      ...data,
      id: 1,
    };
  }
}

export { TransactionService, ITransactionService };
