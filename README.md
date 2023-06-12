# Sex Adapt - Back End

## Links:
- [Diagrama UML](https://www.figma.com/file/Cd2JEqC6xwE6xUdFibFOoG/Back-end-Diagrama-ER?node-id=0%3A1)
- [Diagrama de Rotas](https://www.figma.com/file/V9Jp8f1AIjtT0KH4WPcwsm/Back-End-Routes)

## Dependencies:

- [Docker](https://www.docker.com/)
	- [PostgreSQL](https://hub.docker.com/_/postgres) -> if you want to run without docker compose
- [NodeJS](https://nodejs.org/)
- [NestJS/cli](https://docs.nestjs.com/cli/overview)
- [Bash](https://git-scm.com/downloads)

## Setup

### Docker:
```sh
$ docker compose build && docker compose up -d
```

### Docker Database:
To install with docker, run the command:

> $ docker run --name container-name -e POSTGRES_PASSWORD=your-password -p 5432:5432 -d postgres

After the installations is completed, create a database named `sex_adapt` with the GUI of your choices, recommended: pgAdmin or [DBeaver](https://dbeaver.io/).

### Local:
Obs: You can create by accessing your local PGAdmin or any other database visualizer as in Docker Database

1. Enter PSQL terminal 
> $ sudo su -U postgres psql
2. Create a user with the name sexadapt
> $ CREATE USER sexadapt WITH PASSWORD 'sexadapt';
3. Create a database with the name sex_adapt
> $ CREATE DATABASE 'sex_adapt';
4. Grant privileges to new user
> $ GRANT ALL PRIVILEGES ON DATABASE 'sex_adapt' TO 'sexadapt';

### Run the API:
1. Install dependencies:
> $ yarn
2. Run NestJS script:
> $ yarn start:dev

#### Infos:
- Default port is 3000.
- Check if the same user name and database are being used in .env file.
- For documentation check Documentation - Swagger section.
- If the database docker container is not running try running a second time through docker desktop.

## Documentation - Swagger:
- ### /docs is for statically generated swagger bundles
- ### /swagger is for dyanmic swagger bundles
