import { prismaClient } from "./infrastructure/database";
import app from "./infrastructure/server";

async function main() {
  const application = app();

  application.then((server) => {
    const port = Number(process.env.APP_PORT) ?? 3000;
    server
      .listen({ port, host: "0.0.0.0" })
      .then((_) => {
        process
          .on("SIGTERM", () => {
            prismaClient.$disconnect();
            process.exit(0);
          })
          .on("SIGINT", () => {
            prismaClient.$disconnect();
            process.exit(0);
          });
      })
      .catch((err) => {
        process.exit(1);
      });
  });
}

main();
