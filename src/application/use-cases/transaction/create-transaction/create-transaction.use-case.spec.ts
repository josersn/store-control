import { CreateTransactionUseCase } from "./create-transaction.use-case";

describe("Create Transaction Use Case", () => {
  it("Should be able to create a new transaction", async () => {
    const data = {
      value: 1000,
      transactionType: "credit",
      paymentMethod: "pix",
    };

    const useCase = new CreateTransactionUseCase();

    const transaction = await useCase.exec(data);

    expect(transaction).toBeTruthy();
    expect(transaction.id).toBeTruthy();
    expect(transaction.value).toEqual(data.value);
    expect(transaction.transactionType).toEqual(data.transactionType);
    expect(transaction.paymentMethod).toEqual(data.paymentMethod);
  });
});
