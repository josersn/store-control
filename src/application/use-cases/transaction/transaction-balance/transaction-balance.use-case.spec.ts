import { PaymentMethod } from "../../../../domain/enums/paymentMethod";
import { TransactionType } from "../../../../domain/enums/transactionType";
import { TransactionRepositoryInMemory } from "../../../../domain/repositories/in-memory/transaction-repository.in-memory";
import { TransactionService } from "../../../services/transaction.service";
import { CreateTransactionUseCase } from "../create-transaction/create-transaction.use-case";
import { TransactionBalanceUseCase } from "./transaction-balance.use-case";

describe("Transactions balance use case", () => {
  const repository = new TransactionRepositoryInMemory();
  const service = new TransactionService(repository);
  const createTransactionUseCase = new CreateTransactionUseCase(service);

  async function generateDate() {
    // await createTransactionUseCase.exec({
    //   value: 1000,
    //   transactionType: TransactionType.credit,
    //   paymentMethod: PaymentMethod.bank_slip,
    // });

    // await createTransactionUseCase.exec({
    //   value: 500,
    //   transactionType: TransactionType.credit,
    //   paymentMethod: PaymentMethod.pix,
    // });

    // await createTransactionUseCase.exec({
    //   value: 300,
    //   transactionType: TransactionType.debit,
    //   paymentMethod: PaymentMethod.pix,
    // });
  }

  it("Should return the daily balance", async () => {
    const useCase = new TransactionBalanceUseCase();

    await generateDate();

    const balance = await useCase.exec();

    expect(balance).toEqual(1200)

  });
});
