import { TransactionDTO } from "../../domain/dtos/transactionDTO";
import { TransactionType } from "../../domain/enums/transactionType";
import { ITransactionRepository } from "../../domain/repositories/transaction-repository.interface";

interface ITransactionService {
  create(data: TransactionDTO): Promise<TransactionDTO>;
  findTransactionByToday(): Promise<TransactionDTO[]>;
  calculateBalance(transactions: TransactionDTO[]): any;
}

class TransactionService implements ITransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async create(data: TransactionDTO): Promise<TransactionDTO> {
    return this.transactionRepository.create(data);
  }

  async findTransactionByToday(): Promise<TransactionDTO[]> {
    return this.transactionRepository.findByDate(
      this.getInitialDay(),
      this.getEndDay()
    );
  }

  private getInitialDay(): string {
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    const broker = date.split(" ");
    return `${broker[0]} 00:00:00`;
  }

  private getEndDay(): string {
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    const broker = date.split(" ");
    return `${broker[0]} 23:59:59`;
  }

  calculateBalance(transactions: TransactionDTO[]): any {
    return transactions.reduce((acc, current) => {
      if (current.transactionType === TransactionType.credit) {
        return acc + current.value;
      }
      return acc - current.value;
    }, 0);
  }
}

export { TransactionService, ITransactionService };
