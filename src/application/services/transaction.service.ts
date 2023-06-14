interface ITransactionService {
  create(data: any): Promise<any>;
}

class TransactionService implements ITransactionService {
  async create(data: any): Promise<any> {
    return {
      ...data,
      id: 1,
    };
  }
}

export { TransactionService, ITransactionService };
