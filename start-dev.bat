@echo off
echo Kies wat je wilt starten:
echo 1) Frontend
echo 2) Admin
set /p keuze=Keuze (1 of 2):

if "%keuze%"=="1" (
  cd apps\frontend
  pnpm dev
) else if "%keuze%"=="2" (
  cd apps\admin
  pnpm dev
) else (
  echo Ongeldige keuze. Voer 1 of 2 in.
)
pause

