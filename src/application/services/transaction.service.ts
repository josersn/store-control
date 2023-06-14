import { TransactionDTO } from "../../domain/dtos/transactionDTO";
import { ITransactionRepository } from "../../domain/repositories/transaction-repository.interface";

interface ITransactionService {
  create(data: TransactionDTO): Promise<TransactionDTO>;
}

class TransactionService implements ITransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async create(data: TransactionDTO): Promise<TransactionDTO> {
    return this.transactionRepository.create(data);
  }
}

export { TransactionService, ITransactionService };
