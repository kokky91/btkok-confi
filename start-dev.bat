@echo off
echo ===================================
echo Kies wat je wilt doen:
echo 1) Start frontend
echo 2) Start admin
echo 3) Start beide (in aparte vensters)
echo 4) Build beide apps
echo 5) Lint project
echo 6) Open frontend & admin in VS Code
echo 7) Clean install (verwijder node_modules)
echo ===================================
set /p keuze=Keuze (1 t/m 7):

if "%keuze%"=="1" (
    echo Start frontend...
    pushd apps\frontend\app
    pnpm dev
    popd
) else if "%keuze%"=="2" (
    echo Start admin...
    pushd apps\admin\app
    pnpm dev
    popd
) else if "%keuze%"=="3" (
    echo Start beide apps in aparte vensters...
    start cmd /k "cd apps\frontend\app && pnpm dev"
    start cmd /k "cd apps\admin\app && pnpm dev"
) else if "%keuze%"=="4" (
    echo Bouwen van frontend...
    pushd apps\frontend\app
    pnpm build
    popd

    echo Bouwen van admin...
    pushd apps\admin\app
    pnpm build
    popd
) else if "%keuze%"=="5" (
    echo Lint uitvoeren...
    pnpm lint
) else if "%keuze%"=="6" (
    echo Open VS Code in frontend en admin...
    start code apps\frontend\app
    start code apps\admin\app
) else if "%keuze%"=="7" (
    echo Clean install uitvoeren...
    echo Verwijderen van node_modules en lockfiles...
    rmdir /s /q node_modules
    del /s /q pnpm-lock.yaml
    del /s /q **\pnpm-lock.yaml
    del /s /q **\package-lock.json
    del /s /q **\node_modules
    echo Installeren van dependencies...
    pnpm install
) else (
    echo Ongeldige keuze
)
pause




