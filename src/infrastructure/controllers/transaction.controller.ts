import { FastifyReply } from "fastify";
import { Controller, POST } from "fastify-decorators";
import { TransactionService } from "../../application/services/transaction.service";
import { CreateTransactionUseCase } from "../../application/use-cases/transaction/create-transaction/create-transaction.use-case";
import { Logger } from "../adapter/logger";
import { TransactionRepositoryPrisma } from "../database/prisma/repositories/transaction-repository.prisma";

@Controller("transaction")
export default class TransactionController {
  private logger;

  constructor() {
    this.logger = new Logger("TransactionController");
  }

  @POST("/")
  async create(req, reply: FastifyReply) {
    try {
      const repository = new TransactionRepositoryPrisma();
      const service = new TransactionService(repository);
      const useCase = new CreateTransactionUseCase(service);

      const transaction = await useCase.exec(req.body);

      this.logger.info("Transaction Created with success");
      return reply.status(201).send(transaction);
    } catch (error) {
      this.logger.error(`Error to Create transaction | ${error}`);
      return reply.status(500).send();
    }
  }
}
