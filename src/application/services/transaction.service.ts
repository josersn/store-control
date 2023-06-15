import { TransactionDTO } from "../../domain/dtos/transactionDTO";
import { TransactionType } from "../../domain/enums/transactionType";
import { ITransactionRepository } from "../../domain/repositories/transaction-repository.interface";
import { getEndDay, getInitialDay } from "../utils/date";

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
      getInitialDay(),
      getEndDay()
    );
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
