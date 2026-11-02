# Ashish Kumar Chaudhary — Developer Portfolio

A responsive, animated developer portfolio built with Angular. The portfolio is a static frontend and does not require an ASP.NET Core backend or database.

## Run locally

1. Install Node.js (LTS).
2. Open a terminal in the `frontend` directory.
3. Install dependencies and start Angular:

```bash
npm install
npm start
```

Open http://localhost:4200.

## Build

From the `frontend` directory:

```bash
npm run build
```

The production build is generated under `frontend/dist/ashish-portfolio/browser`.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for static hosting instructions.

## Contact form

The contact form opens the visitor's default email application with the message prefilled. It does not submit to a server or store messages. Visitors must send the email themselves.
