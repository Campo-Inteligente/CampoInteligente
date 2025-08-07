
@echo off
echo.
echo 📦 Atualizando repositório...

REM Garante que estamos no diretório do script
cd /d "%~dp0"
IF ERRORLEVEL 1 (
    echo ❌ Erro ao acessar diretório do projeto.
    exit /b 1
)

REM Verifica se há controle de versão Git
IF NOT EXIST ".git" (
    echo ❌ Este diretório não é um repositório Git. Abortando.
    exit /b 1
)

REM Atualiza a branch main
echo 🔄 Buscando atualizações do repositório remoto...
git fetch origin

echo ♻️ Resetando para o estado mais recente da main...
git reset --hard origin/main

REM Instala dependências
echo 📦 Instalando dependências...
call npm install

REM Parando processos PM2
echo 🛑 Parando processos PM2...
call pm2 stop all

REM Build de produção
echo 🔨 Gerando build de produção...
call npm run build

REM Inicia com PM2
echo 🚀 Iniciando aplicação com PM2...
call pm2 start ecosystem.config.js

REM Salva estado do PM2
echo 💾 Salvando estado atual do PM2...
call pm2 save

REM Exibe status
echo.
echo 📋 Status do PM2:
call pm2 list

echo.
echo ✅ Projeto atualizado e rodando localmente na porta 3000
echo 🌐 Acesso externo via: http://campointeligente.ddns.com.br:21081/
echo.
