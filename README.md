# Project Career Amplify

This is a new website at careeramplify.ai, which has several AI driven capabilities for individuals and eventually organizations. The primary focus is to have AI driven practice interviews, where a candidate can provide the job description of a role they are interviewing for, and then AI will provide a series of prompts and then score the user on how well they did on the interview.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker installed on your local machine
- Node version 20.10.0
- NPM version 10.2.3

### Installing

This project requires MYSql to run, which uses docker locally. To start the project, run the following command:

```bash
docker-compose up
```

This will start the database and the server. The server will be running on port 3306. In addition this also runs a local instance of the adminer database management tool, which can be accessed at localhost:8080. The username is root and the password is password.

This project uses turbo repo to manage a mono repo, which includes the following services/packages:

Apps:

- web: The main landing page for the website (Running Next.js)
- server: The backend API for the website (Running Express.js)
- dashboard: The dashboard for the website (Running React using CRA)

Packages:

- config-typescript: Shared typescript configuration
- database: Prisma database configuration for the application
- services: These are the abstraction for the services of the application, written with Typescript/Node.js and consumes the Server Apps api/graphql data. Makes consuming the data easier for the client apps.

Because this app uses turbo repo, you can run the following command to start all the services:

```bash
npm install
npm run dev
```

However, you will likely want to ensure your database schema is up to date and that you have loaded your local environment with appropriate test data. To do this, you can run the following command:

This command takes the migrations and pushes them into your local database

```bash
npm run db:push
```

This command takes the seed data and pushes it into your local database

```bash
npm run db:seed
```

This command helps you to generate the prisma client

```bash
npm run db:generate
```

If you are adjusting the schema, you can run the following command to generate a new migration:

```bash
npm run db:migrate:dev
```
