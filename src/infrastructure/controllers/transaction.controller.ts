import { FastifyReply } from "fastify";
import { Controller, POST } from "fastify-decorators";
import { TransactionService } from "../../application/services/transaction.service";
import { CreateTransactionUseCase } from "../../application/use-cases/transaction/create-transaction/create-transaction.use-case";
import { TransactionRepositoryPrisma } from "../database/prisma/repositories/transaction-repository.prisma";

@Controller("transaction")
export default class TransactionController {
  @POST("/")
  async create(req, reply: FastifyReply) {
    try {
      const repository = new TransactionRepositoryPrisma();
      const service = new TransactionService(repository);
      const useCase = new CreateTransactionUseCase(service);

      const transaction = await useCase.exec(req.body);

      return reply.status(201).send(transaction);
    } catch (error) {
      console.log("aeeeeeecç",error)
      return reply.status(500).send();
    }
  }
}
