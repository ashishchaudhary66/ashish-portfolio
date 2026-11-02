# Ashish Kumar Chaudhary — Developer Portfolio

Angular standalone frontend + ASP.NET Core Web API backend.

## Run locally
- Install Node.js and .NET 10 SDK.
- API: `cd backend/AshishPortfolio.Api && dotnet run`
- Frontend: `cd frontend && npm install && npm start`
- Open http://localhost:4200. If the API selects a different port, update `frontend/src/environments/environment.ts`.

## Hosting
- Frontend: GitHub Pages (publish `frontend/dist/ashish-portfolio/browser` after `npm run build`).
- API: Render Web Service using `backend/AshishPortfolio.Api/Dockerfile`.
- Set Angular `apiUrl` to the deployed API + `/api`, and configure API `AllowedOrigins` to your exact GitHub Pages origin.
- Free hosting limits can change; Render free instances may sleep while idle.

The contact endpoint validates and logs submissions only. It does not send email or store messages permanently. Add persistent storage and an email provider before production use. Verify your public contact details and project URLs before deployment.
