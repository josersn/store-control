//@ts-nocheck

import { prismaClient } from "..";
import { TransactionDTO } from "../../../../domain/dtos/transactionDTO";
import { ITransactionRepository } from "../../../../domain/repositories/transaction-repository.interface";

class TransactionRepositoryPrisma implements ITransactionRepository {
  async create(data: TransactionDTO): Promise<TransactionDTO> {
    return prismaClient.transaction.create({
      data: {
        ...data,
      },
    });
  }

  async findByDate(
    initial: string | Date,
    end: string | Date
  ): Promise<TransactionDTO[]> {
    console.log(initial, end);
    return prismaClient.transaction.findMany({
      where: {
        createdAt: {
          gte: new Date(initial),
          lte: new Date(end),
        },
      },
    });
  }
}

export { TransactionRepositoryPrisma };
