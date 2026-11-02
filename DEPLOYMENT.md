# Deploy the Angular Portfolio

This portfolio is a static Angular application. No .NET API, Docker service, database, or backend hosting is required.

## Build locally

From the repository root:

```bash
cd frontend
npm install
npm run build
```

The generated site is in `frontend/dist/ashish-portfolio/browser`.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Add a workflow that installs frontend dependencies, builds Angular, and publishes the contents of `frontend/dist/ashish-portfolio/browser`.
5. For a repository site at `https://ashishchaudhary66.github.io/ashish-portfolio/`, build with the base href:

```bash
cd frontend
npm ci
npx ng build --base-href /ashish-portfolio/
```

6. Confirm the deployed URL loads and test navigation and the contact form.

The contact form uses a `mailto:` link. It opens the visitor's configured email app; it does not send or store messages automatically.
