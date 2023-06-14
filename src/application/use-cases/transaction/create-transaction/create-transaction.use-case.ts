class CreateTransactionUseCase {
  exec(data: any) {
    return {
      ...data,
      id: 1,
    };
  }
}

export { CreateTransactionUseCase };
