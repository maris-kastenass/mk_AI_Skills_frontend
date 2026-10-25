# Frontend

Vue 3 + Vite + TypeScript frontend for the code generator app.

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Start locally

```bash
npm run dev
```

The app usually runs at:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Environment variables

Create a `.env` file in this folder if needed:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

This frontend calls the backend at `/api/agent`.

## Project structure

```text
src/
  components/
  router/
  services/
  skills/
  stores/
  views/
```
