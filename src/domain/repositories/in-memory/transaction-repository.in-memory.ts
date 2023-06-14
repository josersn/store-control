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

  findBy(data: any): Promise<TransactionDTO | TransactionDTO[] | undefined> {
    throw new Error("Method not implemented.");
  }
}

export { TransactionRepositoryInMemory };
