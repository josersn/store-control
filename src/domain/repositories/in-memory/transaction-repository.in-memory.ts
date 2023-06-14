import { TransactionDTO } from "../../dtos/transactionDTO";
import { ITransactionRepository } from "../transaction-repository.interface";

class TransactionRepositoryInMemory implements ITransactionRepository {

  private transaction 

  async create(data: TransactionDTO): Promise<TransactionDTO> {
    const transaction = {
      id: Math.floor(Math.random() * 100),
      ...data,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return transaction;
  }
}

export { TransactionRepositoryInMemory };
