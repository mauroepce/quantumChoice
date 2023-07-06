# QuantumChoice

QuantumChoice is a web application that empowers users to make informed decisions and explore multiple scenarios without facing real-life consequences. Leveraging artificial intelligence, it uses OpenAI's GPT-4 API to generate scenarios based on user prompts. Users can delve into both pessimistic and optimistic scenarios to have a broad spectrum of multiple possibilities.

## Table of Contents

1. [Technologies Used](#technologies-used)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)

## Technologies Used

### Front-end

The client-side of QuantumChoice is built using the following technologies:

- Next.js
- JavaScript
- Tailwind CSS

### Back-end

The server-side of QuantumChoice is structured as microservices architecture, including four microservices:

- API Gateway - `api-gateway`
- Authentication Service - `auth-service`       
- Chat GPT Service - `chat-gpt-service`
- Database Service - `db-service`

## Installation

### Front-end

To install all the dependencies, navigate to the `client` directory and run the following command:

```bash
npm install
```

### Back-end

For each of the microservices (api-gateway, auth-service, chat-gpt-service, db-service), navigate to the appropriate directory under api and run:

```bash
npm install
```

## Usage

### Front-end

To run the front-end part of QuantumChoice, navigate to the client directory and run:

```bash
npm run dev
```
