# btkok-confi Batch Menu

Dit batch script biedt een keuzemenu voor het lokaal beheren van je monorepo:

## Opties
1. Start alleen de frontend (`pnpm dev` in frontend/app)
2. Start alleen de admin (`pnpm dev` in admin/app)
3. Start beide apps in aparte vensters
4. Build beide apps (`pnpm build`)
5. Voer lint uit (`pnpm lint`)
6. Open frontend en admin in VS Code
7. Clean install (verwijder `node_modules` en lockfiles, dan `pnpm install`)

Sla dit script op als `start-dev.bat` en voer uit in een Windows PowerShell/Command Prompt.