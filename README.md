This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

## First Run
```bash
npm i && npm run dev
# or
yarn && yarn dev
```

## Subsequent Runs
```bash
npm run dev
# or
yarn dev
```

## About Application
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This will open a server side rendered page. Multiple posts can be seen on the page, clicking on any of the post card will take us to the single post page

Open [http://localhost:3000/static](http://localhost:3000/static) with your browser to see the result.
This will open a statically rendered page. Multiple posts can be seen on the page, clicking on any of the post card will take us to the single post page

Open [http://localhost:3000/create](http://localhost:3000/create) with your browser to see the result.
This will open a server side rendered create post page.

Open [http://localhost:3000/posts/[id]](http://localhost:3000/posts/1) with your browser to see the result.
This will open a server sid rendered create post page.

## Error Logging
Custom Error pages with Sentry integration in the application is used.

## State Managment
Redux amd Redux-Thunk are used for state mangement and asynchronous API fetching.

## Production
The live version of the application can be reached at [https://meddy-assignment.vercel.app](https://meddy-assignment.vercel.app)
The redeployment process can be initiated by submitting a new commit in the main branch.

## Git Repository
The 'main' branch is the base branch and most up to date in the project with the latest code.

## API Caching
24 hour based in memory API caching mechanism used in the application.

## Testing Suite
The application can be tested by executing:

 - npm run cypress:open for testing with UI.
 - npm run cypress:run for testing with headless browser in CLI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
