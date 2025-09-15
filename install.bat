@echo off
cd /d %~dp0
npm install
cd decktap-web
npm install
npm run build
pause