import { IUseCase } from "../../../core/use-case";
import { ITransactionService } from "../../../services/transaction.service";

interface IRequest {
  value: number;
  transactionType: string;
  paymentMethod: string;
}

type ICreateTransactionUseCase = IUseCase<IRequest, any>;

class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(private transactionService: ITransactionService) {}

  async exec(data: IRequest): Promise<any> {
    return this.transactionService.create(data);
  }
}

export { CreateTransactionUseCase };
