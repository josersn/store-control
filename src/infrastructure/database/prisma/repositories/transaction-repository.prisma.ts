//@ts-nocheck
import { prismaClient } from "..";
import { TransactionDTO } from "../../../../domain/dtos/transactionDTO";
import { ITransactionRepository } from "../../../../domain/repositories/transaction-repository.interface";

class TransactionRepositoryPrisma implements ITransactionRepository {
  async create(data: TransactionDTO): Promise<TransactionDTO> {

    return prismaClient.transaction.create({
      data: {
        ...data
      }
    });
  }
}

export { TransactionRepositoryPrisma };
