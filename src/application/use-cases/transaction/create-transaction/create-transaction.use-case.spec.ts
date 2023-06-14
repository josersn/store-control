import { PaymentMethod } from "../../../../domain/enums/paymentMethod";
import { TransactionType } from "../../../../domain/enums/transactionType";
import { TransactionRepositoryInMemory } from "../../../../domain/repositories/in-memory/transaction-repository.in-memory";
import { TransactionService } from "../../../services/transaction.service";
import { CreateTransactionUseCase } from "./create-transaction.use-case";

describe("Create Transaction Use Case", () => {
  it("Should be able to create a new transaction", async () => {
    const data = {
      value: 1000,
      transactionType: TransactionType.credit,
      paymentMethod: PaymentMethod.pix,
    };

    const repository = new TransactionRepositoryInMemory();
    const service = new TransactionService(repository);
    const useCase = new CreateTransactionUseCase(service);

    const transaction = await useCase.exec(data);

    expect(transaction).toBeTruthy();
    expect(transaction.id).toBeTruthy();
    expect(transaction.value).toEqual(data.value);
    expect(transaction.transactionType).toEqual(data.transactionType);
    expect(transaction.paymentMethod).toEqual(data.paymentMethod);
  });
});
