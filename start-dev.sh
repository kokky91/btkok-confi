#!/bin/bash

echo "🚀 Kies wat je wilt starten:"
echo "1) Frontend"
echo "2) Admin"
read -p "Keuze (1 of 2): " keuze

if [ "$keuze" = "1" ]; then
  cd apps/frontend
  pnpm dev
elif [ "$keuze" = "2" ]; then
  cd apps/admin
  pnpm dev
else
  echo "Ongeldige keuze. Voer 1 of 2 in."
fi
