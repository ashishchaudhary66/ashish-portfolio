# Deployment
1. Push the project to GitHub.
2. Deploy `backend/AshishPortfolio.Api/Dockerfile` as a Docker Web Service on Render.
3. Set Render environment variable `AllowedOrigins` to your frontend origin, e.g. `https://YOURNAME.github.io`.
4. Set `frontend/src/environments/environment.ts` apiUrl to `https://YOUR-API.onrender.com/api`.
5. Run `cd frontend && npm install && npm run build`.
6. Publish `frontend/dist/ashish-portfolio/browser` with GitHub Pages. For a repository page, build using `npx ng build --base-href /REPOSITORY/`.
7. Check the API `/health` endpoint and submit a test contact message.

Free tier availability and limits are subject to provider changes. Render services may spin down when inactive.
