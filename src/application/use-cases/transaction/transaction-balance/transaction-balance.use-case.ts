import { IUseCase } from "../../../core/use-case";
import { ITransactionService } from "../../../services/transaction.service";

type ITransactionBalanceUseCase = IUseCase<null, number>;

class TransactionBalanceUseCase implements ITransactionBalanceUseCase {
  constructor(private transactionService: ITransactionService) {}

  async exec(): Promise<any> {
    const transactions = await this.transactionService.findTransactionByToday();

    const balance = this.transactionService.calculateBalance(transactions);

    return balance;
  }
}

export { TransactionBalanceUseCase };
