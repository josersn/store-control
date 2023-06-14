import { TransactionDTO } from "../../../../domain/dtos/transactionDTO";
import { PaymentMethod } from "../../../../domain/enums/paymentMethod";
import { TransactionType } from "../../../../domain/enums/transactionType";
import { IUseCase } from "../../../core/use-case";
import { ITransactionService } from "../../../services/transaction.service";

interface IRequest {
  value: number;
  transactionType: TransactionType;
  paymentMethod: PaymentMethod;
}

type ICreateTransactionUseCase = IUseCase<IRequest, TransactionDTO>;

class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(private transactionService: ITransactionService) {}

  async exec(data: IRequest): Promise<TransactionDTO> {
    return this.transactionService.create(data);
  }
}

export { CreateTransactionUseCase };
