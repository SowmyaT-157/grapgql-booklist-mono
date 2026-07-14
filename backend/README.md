# Book Directory GraphQL API Backend

A performance-focused, strongly typed backend API built with **Node.js**, **Express**, and **TypeScript**. It utilizes **Apollo Server v4** (`@apollo/server/express4`) to serve structured data via a single GraphQL endpoint.

---

## 📝 Description

This backend serves as the data layer for a multi-page book directory application. It wraps static mock data records in a flexible GraphQL schema, enabling frontends to request specific properties over the network. By shifting from standard REST to Apollo Server Express middleware, the API prevents data over-fetching and minimizes network payload sizes.

---

## ✨ Features

  - Apollo Server v4 Architecture
  - Express Middleware Integration


---

##  Tech Stack

  - Node.js
  - Express
  - GraphQL + Apollo Server v4 
  - TypeScript

---

##  Installation and Setup

### 1. Download Dependencies
Execute the following commands within your backend folder to pull the core packages and their corresponding development types:

```bash

npm install @apollo/server express cors


npm install --save-dev typescript ts-node @types/express @types/cors @types/node
```

### 2. Configure the Compiler (`tsconfig.json`)
Verify that your TypeScript compiler properties are set up to handle modern subpath resolution schemas natively:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### 3. Run the Local Instance
Boot the backend server instance locally inside your shell or integrated terminal interface:

```bash
npm run dev

npx ts-node src/server.ts
```

## API Gateway Endpoint: 
```bash
http://localhost:3009/graphql
```

## Contributing
1.Fork the repository

2.Create a new branch (git checkout -b feature-branch).

3.Make your changes and commit them (git commit -m "Add new feature").

4.Push to the branch (git push origin feature-branch).
5.Create a pull request.

---

## Contact

- For any issues or queries ,contact Sowmya T_157

  - https://github.com/SowmyaT-157
