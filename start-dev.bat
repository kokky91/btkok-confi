@echo off
cls
echo ===================================
echo BTKOK-CONFI Project Manager
echo ===================================
echo Kies wat je wilt doen:
echo 1) Start frontend
echo 2) Start admin
echo 3) Start beide (in hetzelfde venster)
echo 4) Build beide apps
echo 5) Lint project (output naar log)
echo 6) Open frontend & admin in VS Code
echo 7) Clean install (node_modules en lockfiles verwijderen)
echo 8) Start Turbo dev mode
echo 9) TypeScript check (output naar log)
echo ===================================
set /p keuze=Keuze (1 t/m 9): 

where pnpm >nul 2>nul
if errorlevel 1 (
    echo.
    echo [FOUT] pnpm is niet gevonden in PATH.
    pause
    exit /b
)

if "%keuze%"=="1" (
    echo Start frontend...
    pushd apps\frontend
    pnpm dev
    popd
) else if "%keuze%"=="2" (
    echo ▶️ Start admin...
    pushd apps\admin\app
    pnpm dev
    popd
) else if "%keuze%"=="3" (
    echo Start frontend...
    start cmd /k "cd apps\frontend && pnpm dev"
    echo Start admin...
    start cmd /k "cd apps\admin && pnpm dev"
) else if "%keuze%"=="4" (
    echo Build frontend...
    pushd apps\frontend
    pnpm build
    popd

    echo Build admin...
    pushd apps\admin
    pnpm build
    popd
) else if "%keuze%"=="5" (
    echo Lint uitvoeren...
    if not exist logs mkdir logs
    pnpm lint > logs\lint-output.txt
    echo ✅ Lint-output opgeslagen in logs\lint-output.txt
) else if "%keuze%"=="6" (
    echo Open VS Code in frontend en admin...
    start code apps\frontend
    start code apps\admin
) else if "%keuze%"=="7" (
    echo Clean install uitvoeren...
    echo Verwijderen van node_modules en lockfiles...

    if exist node_modules rmdir /s /q node_modules
    for /d /r %%i in (node_modules) do if exist "%%i" rmdir /s /q "%%i" 2>nul
    for /r %%f in (pnpm-lock.yaml) do del /q "%%f" 2>nul
    for /r %%f in (package-lock.json) do del /q "%%f" 2>nul

    echo Dependencies opnieuw installeren...
    pnpm install

    echo Goedkeuren van build-scripts...
    pnpm approve-builds
) else if "%keuze%"=="8" (
    echo Start Turbo dev mode...
    pnpm run dev
) else if "%keuze%"=="9" (
    echo TypeScript check uitvoeren...
    if not exist logs mkdir logs
    pnpm run check-types > logs\ts-check-output.txt
    echo ✅ Type-check opgeslagen in logs\ts-check-output.txt
) else (
    echo Ongeldige keuze. Probeer opnieuw.
)
pause


