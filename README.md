# techgames-api-challenge

## Requirements

* [Docker](https://docs.docker.com)
* [Docker-Compose](https://docs.docker.com/compose)
* [NVM (optional but highly recommended)](https://github.com/nvm-sh/nvm)
* [Node (preferably v11.13.0)](https://nodejs.org/en/download)

## Env variables:
* `SECRET` for the Auth secret passed from frontend to backend
* `SERVER_PORT` for the port on which the server listens
* `NODE_ENV` should be `dev` or `production`
* `DB_URL` is the URL to the mongo DB 

## Instructions

* To install dependencies (not needed for running server but helps with development)
```bash
npm install
```

* To run a dev server:
```bash
npm start
```

* To run the tests:
```bash
npm run test
```

* To run linter:
```bash
npm run lint
```

## API Documentation

After running the dev server, docs will be at `http://localhost:3000/api-docs`