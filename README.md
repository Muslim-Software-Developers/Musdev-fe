This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Team Workflows (Please follow all guidelines judiciously!)

1. Most importantly, **DO NOT PUSH TO MASTER/MAIN/DEV**
2. Always create a new branch for any new feature you're working on. Branch name format should be `[task-type]/[ticket-title]` e.g `feature/home-section`.
3. Commit your code for every task/sub-task worked on. Commit format should be `[task-type]: [ticket-title]` e.g `feature: build home section screen`. (commit message can be descriptive if feature is large).
4. Push branch online then make a PR, request review from your team members and **DO NOT MERGE PR** (follow PR template when making one)
5. PR gets merged into `dev` by team lead after team and code review has passed.

**_NB: Ticket numbers can be found in the project management tool being used e.g Trello, JIRA, Github Boards_**

**_NB: Task types can be_**:

- feat/feature
- chore
- refactor
- bug
- fix/hotfix

_See [link](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index) for more conventional commit style._
