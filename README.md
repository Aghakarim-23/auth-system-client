# Auth System

A frontend web app I built with React. It has user authentication, a profile page, and a posts section.

## What it does

- You can **register** and **log in** with your account
- After logging in, you can see your **profile** — your name, email, and user ID
- From the profile page you can go to **My Posts** to see all your posts
- Each post is clickable and opens a **detail page** with the full content
- You can also update your **display name** from the settings page
- Pages like profile, settings, and posts are protected — only logged in users can access them

## Pages

| Path | Description |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/login` | Login |
| `/register` | Register |
| `/profile` | Your profile (private) |
| `/settings` | Update your name (private) |
| `/my-posts` | All your posts (private) |
| `/my-posts/:id` | Single post detail (private) |

## Tech used

- React + Vite
- React Router
- TanStack React Query
- Tailwind CSS
- Axios
