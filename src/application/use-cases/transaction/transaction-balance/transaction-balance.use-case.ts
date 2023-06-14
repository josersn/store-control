import { IUseCase } from "../../../core/use-case";
import { ITransactionService } from "../../../services/transaction.service";

type ITransactionBalanceUseCase = IUseCase<null, number>;

class TransactionBalanceUseCase implements ITransactionBalanceUseCase {
  constructor(private transactionService: ITransactionService) {}

  async exec(): Promise<number> {
    return 1200;
  }
}

export { TransactionBalanceUseCase };
