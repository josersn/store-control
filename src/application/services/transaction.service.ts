import { TransactionDTO } from "../../domain/dtos/transactionDTO";
import { ITransactionRepository } from "../../domain/repositories/transaction-repository.interface";

interface ITransactionService {
  create(data: TransactionDTO): Promise<TransactionDTO>;
  findTransactionByToday(): Promise<
    TransactionDTO | TransactionDTO[] | undefined
  >;
}

class TransactionService implements ITransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async create(data: TransactionDTO): Promise<TransactionDTO> {
    return this.transactionRepository.create(data);
  }

  async findTransactionByToday(): Promise<
    TransactionDTO | TransactionDTO[] | undefined
  > {
    return this.transactionRepository.findBy({
      where: {
        date: {
          lte: this.getInitialDay,
          gte: this.getEndDay,
        },
      },
    });
  }

  private getInitialDay(): string {
    let broker = new Date().toISOString().slice(0, 19).replace("T", " ");
    return `${broker[0]} 00:00:00`;
  }

  private getEndDay(): string {
    let broker = new Date().toISOString().slice(0, 19).replace("T", " ");
    return `${broker[0]} 23:59:59`;
  }
}

export { TransactionService, ITransactionService };
