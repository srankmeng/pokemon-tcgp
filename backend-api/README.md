# Pokemon TCG Pocket API

A simple API server built with Bun for Pokemon TCG Pocket.

## Features

- Fast and lightweight server using Bun runtime
- RESTful API endpoints
- Simple "hello" endpoint for testing

## Prerequisites

- [Bun](https://bun.sh/) installed on your system

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies (if any):
   ```bash
   bun install
   ```

## Usage

### Development Mode

Run the server in development mode with auto-reload:

```bash
bun run dev
```

### Production Mode

Run the server in production mode:

```bash
bun run start
```

The server will start on `http://localhost:3333`

## API Endpoints

### GET /hello

Returns a simple "hello" message.

**Response:**

```
hello
```

### GET /

Returns the API server name.

**Response:**

```
Pokemon TCG Pocket API Server
```

## Project Structure

```
pokemon-tcgp/
├── index.js          # Main server file
├── package.json      # Project configuration
└── README.md         # Project documentation
```

## Development

This project uses Bun as the JavaScript runtime. Bun provides:

- Fast startup times
- Built-in bundler, test runner, and package manager
- Native TypeScript support
- Web-standard APIs

## License

MIT
