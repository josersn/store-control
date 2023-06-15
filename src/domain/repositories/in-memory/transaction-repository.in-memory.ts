import { TransactionDTO } from "../../dtos/transactionDTO";
import { Transaction } from "../../entities/transaction";
import { ITransactionRepository } from "../transaction-repository.interface";

class TransactionRepositoryInMemory implements ITransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  async create(data: TransactionDTO): Promise<TransactionDTO> {
    const transaction = {
      id: Math.floor(Math.random() * 100),
      ...data,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.transactions.push(transaction);

    return transaction;
  }

  async findByDate(
    initial: string | Date,
    end: string | Date
  ): Promise<TransactionDTO[]> {
    return this.transactions;
  }
}

export { TransactionRepositoryInMemory };
