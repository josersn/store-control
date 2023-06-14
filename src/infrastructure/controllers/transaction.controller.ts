import { FastifyReply } from "fastify";
import { Controller, GET, POST } from "fastify-decorators";
import {
  ITransactionService,
  TransactionService,
} from "../../application/services/transaction.service";
import { CreateTransactionUseCase } from "../../application/use-cases/transaction/create-transaction/create-transaction.use-case";
import { TransactionBalanceUseCase } from "../../application/use-cases/transaction/transaction-balance/transaction-balance.use-case";
import { ITransactionRepository } from "../../domain/repositories/transaction-repository.interface";
import { Logger } from "../adapter/logger";
import { TransactionRepositoryPrisma } from "../database/prisma/repositories/transaction-repository.prisma";

@Controller("transaction")
export default class TransactionController {
  private logger;
  private transactionRepository: ITransactionRepository;
  private transactionService: ITransactionService;

  constructor() {
    this.logger = new Logger("TransactionController");
    this.transactionRepository = new TransactionRepositoryPrisma();
    this.transactionService = new TransactionService(this.transactionRepository);
  }

  @POST("/")
  async create(req, reply: FastifyReply) {
    try {
      const useCase = new CreateTransactionUseCase(this.transactionService);

      const transaction = await useCase.exec(req.body);

      this.logger.info("Transaction Created with success");
      return reply.status(201).send(transaction);
    } catch (error) {
      this.logger.error(`Error to Create transaction | ${error}`);
      return reply.status(500).send();
    }
  }

  @GET("/")
  async balance(req, reply: FastifyReply) {
    try {
      const useCase = new TransactionBalanceUseCase(this.transactionService);

      const balance = await useCase.exec();
      return reply.status(201).send({
        balance
      });
    } catch (error) {
      console.log(error)
      // this.logger.error(`Error to get transaction | ${error}`);
      return reply.status(500).send();
    }
  }
}
