import { IUseCase } from "../../../core/use-case";

type ITransactionBalanceUseCase = IUseCase<null, number>

class TransactionBalanceUseCase implements ITransactionBalanceUseCase {
  async exec(): Promise<number> {
    return 1200
  }
}

export { TransactionBalanceUseCase };
