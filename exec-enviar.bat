@echo off
chcp 65001 >nul
set /p commit_message="Digite a mensagem do commit: "

git add .
git commit -m "%commit_message%"
git push origin main --force

echo Atualização enviada com sucesso!
pause
