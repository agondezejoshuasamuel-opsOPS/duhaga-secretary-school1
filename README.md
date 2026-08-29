# DUHAGA Secretary School

A modern, responsive web presence for **DUHAGA Secretary School** — *"Habwa Ruhanga n'Ihanga Lyaitu"*.

## About

This project showcases the school's academic programs, facilities, calendar events, and enrollment process. It is designed with a professional academic aesthetic using the school's brand colors: deep blue, fresh green, and gold/amber.

## Features

- **Hero Section** — School name, motto, and call-to-action.
- **About & Activities** — Academic excellence, practical training, and professional development highlights.
- **Curriculum** — Overview of secretarial and office-management subjects.
- **Events Calendar** — Upcoming academic and school events for 2026.
- **Facility Gallery** — Photos of the buildings, compound, classrooms, and computer laboratory.
- **Enrollment CTA** — Direct link to the online application form.
- **Apply Page** (`/apply`) — A validated application form for prospective students.

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form validation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (recommended via [nvm](https://github.com/nvm-sh/nvm))
- npm or bun

### Run Locally

```sh
# 1. Clone the repo
git clone <YOUR_GIT_URL>

# 2. Enter the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm i

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Build

```sh
npm run build
```

## Project Structure

```
src/
  pages/
    Index.tsx       # Landing page
    Apply.tsx       # Application form
    NotFound.tsx    # 404 page
  components/       # Reusable UI components
  integrations/     # Backend/client integrations
  assets/           # Images and static assets
public/             # Public static files
```

## Deployment

This project is built with Lovable. To publish:

1. Open the [Lovable project](https://lovable.dev/projects/496daef0-81b4-46ca-9fb7-5377a1904c54).
2. Click **Share → Publish**.

## Custom Domain

You can connect a custom domain via **Project > Settings > Domains**. Learn more in the [Lovable docs](https://docs.lovable.dev/features/custom-domain#custom-domain).

## License

© DUHAGA Secretary School. All rights reserved.
