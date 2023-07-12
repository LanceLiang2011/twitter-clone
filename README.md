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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Database structure

The database structure of this project is as following:

```

Table user {
  id integer [primary key]
  username string
  email string
  created_at timestamp
}

Table tweet {
  id uuid [primary key]
  text string
  body text [note: 'Content of the tweet']
  author_id integer
  created_at timestamp
  updated_at timestamp
}
Ref: tweet.author_id > user.id // many-to-one


Table like {
  id uuid [primary key]
  user_id string
  tweet_id string
  created_at timestamp
}
Ref: like.user_id > user.id
Ref: like.tweet_id > tweet.id


Table hashtag {
  id uuid [primary key]
  name string
}

Ref: hashtag.id <> tweet.id

Table repley {
  id uuid [primary key]
  text string
  user_id string
  tweet_id string
  repley_id string
}

Ref: repley.user_id > user.id
Ref: repley.tweet_id > tweet.id
Ref: repley.repley_id <> repley.id

Table bookmark {
  id uuid [primary key]
  user_id string
  tweet_id string
  created_at timestamp
}

Ref: bookmark.user_id > user.id
Ref: bookmark.tweet_id > tweet.id

```

Checkout details in this link: https://dbdiagram.io/d/64aef97602bd1c4a5ef8f797
