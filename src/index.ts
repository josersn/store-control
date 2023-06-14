import app from "./infrastructure/server";

async function main() {
  const application = app();

  application.then((server) => {
    const port = Number(process.env.APP_PORT) ?? 3000;
    server.listen({ port, host: "0.0.0.0" }, (err, address) => {
      if (err) throw err;

      console.log("Running");
    });
  });
}

main();
