Hello there! this application has the conceptions of SOLID and clean architecture in this case I'm using docker to run database and to manage the routes
I`m using Fastify not Express. Why? In this article below you can find more information about it. 

* [Article](https://medium.com/deno-the-complete-reference/express-vs-fastify-vs-hapi-vs-koa-hello-world-performance-comparison-dd8cd6866bdd#:~:text=Express%20takes%20the%20most%20time,The%20difference%20is%20pretty%20significant.)


# Production dependency
* [Fastify](https://www.fastify.io/)
* [Pino](https://github.com/pinojs/pino)
* [Prisma](https://www.prisma.io/)


# Installation and start project 


Step 1: Configure the local variables <br />
Step 2: Run docker-compose.yml
```
docker compose up
```
Step 3: Install e generate migrations e init the serve
```
npm install && npx prisma migrate dev && npm run dev
```
Step 4: You can access the health check http://localhost:3000/ and you should get
```
API IS RUNNING
```


# Testing
You can run the test with this code:

```
npm run test
```

### Routes

```
→ POST -> http://localhost:3000/transaction  | To create a new transaction.

curl --request POST \
  --url http://localhost:3000/transaction \
  --header 'Content-Type: application/json' \
  --data '{
	"value": 1000,
	"transactionType": "debit",
	"paymentMethod": "pix"
}'

→ GET -> http://localhost:3000/transaction  | list a balance.

curl --request GET \
  --url http://localhost:3000/transaction
```


## Clean Architecture
This project follow this concept of programming, but you can analyze better in second image

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

This project was coded with this schema
![System](arch.png)