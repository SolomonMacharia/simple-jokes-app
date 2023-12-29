# JOKES

This project involves:

- A simple GraphQL server that wraps around the Chuck Norris Jokes API.
- A simple React client that consumes the GraphQL server.

## Description

The GraphQL server is a simple Node.js server that wraps around the Jokes API. It exposes a single endpoint that returns a random joke.
The server is written in TypeScript and uses the Apollo Server library.

## Getting Started

### Dependencies

* Node.js - Tested on the LTS version (20.10.0)

### Installing

To install the dependencies, run the following command in the root directory of the project:
```
cd server && npm ci
```

### Executing program
To start the server, run the following command in the root directory of the project:
```
cd server/src && npm run start
```