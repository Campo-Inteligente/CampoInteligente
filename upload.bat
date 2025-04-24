@echo off
set /p commit_message="Digite a mensagem do commit: "

git add .
git commit -m "%commit_message%"
git push origin main

echo Atualização enviada com sucesso!
pause
