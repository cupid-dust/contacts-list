## Important Note

- Instead of creating a (separate) backend, I have used internal Api Mechanism of NextJS.
- Because we needed simple functionality that's why I went with this approach

## About

- This Application is build with NextJS, TailwindCSS, TypeScript, Jest (For Unit Testing), Framer motion and Remeda (utility library designed especially for TypeScript).
- This Application uses NextJS App Router to create APIs with Prisma, Sqlite and S3 for storage.
- To handle Mutation, Application uses Server Actions of NextJS.

## How to start

- You need to install the packages with these following commands:

  - npm install or yarn install

- To start the applications run these as follows:

  - npm run dev or yarn dev

## Unit Testing

- To test the application use the following commands:

  - npm run test or yarn test

## Build

- You can create the build with these two following commands:

  - npm run build or yarn build

## Prisma

- To migrate DB use:
  - npx prisma migrate dev or yarn prisma migrate dev
- To generate prisma use:
  - npx prisma gengerate or yarn prisma generate
- To open Prisma Studio, run these commands:
  - npx prisma studio or yarn prisma studio

## Next.js

- [https://nextjs.org/](https://nextjs.org/)
- [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)

## Environment

You should have a `.env.local` with the following:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_BUCKET_NAME
- AWS_REGION_NAME
