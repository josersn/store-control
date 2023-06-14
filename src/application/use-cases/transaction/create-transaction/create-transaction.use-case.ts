import { IUseCase } from "../../../core/use-case";

interface IRequest {
  value: number;
  transactionType: string;
  paymentMethod: string;
}

type ICreateTransactionUseCase = IUseCase<IRequest, any>;

class CreateTransactionUseCase implements ICreateTransactionUseCase {
  async exec(data: IRequest): Promise<any> {
    return {
      ...data,
      id: 1,
    };
  }
}

export { CreateTransactionUseCase };
