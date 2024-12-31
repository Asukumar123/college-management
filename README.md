# College Management System

A Next.js application with Prisma and PostgreSQL for managing colleges, courses, and user authentication.

## Prerequisites

- Node.js (v16+)
- PostgreSQL
- Prisma CLI


## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/college-management.git  
   cd college-management  

2. **Install dependencies** :
```
npm install
``` 

### 3. Configure database connection

Add the connection URLs that you received after setting up the Vercel Postgres (or Neon) database to the [`.env`](./.env) file. 
```bash
POSTGRES_PRISMA_URL="your-db-connection-string-with-pgbouncer=true"
POSTGRES_URL_NON_POOLING="your-db-connection-string"
```

The values may look similar to this:

```bash
POSTGRES_PRISMA_URL="postgres://default:password@ep-wild-voice-61367780-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:password@ep-wild-voice-61367780.us-east-1.postgres.vercel-storage.com:5432/verceldb"
```
### 4. Create tables & seed database

```
npx prisma migrate dev
npx prisma db seed
```

### 5. Run the app

```
npm run dev
```

## Swagger Api docs link

```
https://app.swaggerhub.com/apis/ASUKUMARUG21CS/college-management/1.0.0
```

