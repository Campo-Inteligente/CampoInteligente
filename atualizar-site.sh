#!/bin/bash

echo ""
echo "📦 Atualizando repositório..."

# Garante que estamos no diretório correto
cd "$(dirname "$0")" || {
  echo "❌ Erro ao acessar diretório do projeto."
  exit 1
}

# Verifica se há controle de versão Git
if [ ! -d ".git" ]; then
  echo "❌ Este diretório não é um repositório Git. Abortando."
  exit 1
fi

# Atualiza a branch main
echo "🔄 Buscando atualizações do repositório remoto..."
git fetch origin

echo "♻️ Resetando para o estado mais recente da main..."
git reset --hard origin/main

# Instala dependências se necessário
echo "📦 Instalando dependências..."
npm install

# Parando processos atuais do PM2
echo "🛑 Parando processos PM2..."
pm2 stop all

# Build de produção
echo "🔨 Gerando build de produção..."
npm run build

# Inicia com PM2 na porta 3000
echo "🚀 Iniciando aplicação com PM2..."
pm2 start ecosystem.config.js

# Salva o estado para inicialização automática
echo "💾 Salvando estado atual do PM2..."
pm2 save

# Exibe status
echo ""
echo "📋 Status do PM2:"
pm2 list

echo ""
echo "✅ Projeto atualizado e rodando localmente na porta 3000"
echo "🌐 Acesso externo via: http://campointeligente.ddns.com.br:21081/"
echo ""