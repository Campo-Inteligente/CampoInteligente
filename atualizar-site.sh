#!/bin/bash

echo "📦 Atualizando repositório..."

# Garante que estamos no diretório correto
cd "$(dirname "$0")" || {
  echo "❌ Erro ao acessar diretório do projeto."
  exit 1
}

# Busca atualizações do GitHub
git fetch origin

# Reseta forçadamente para o estado mais recente da branch main
git reset --hard origin/main

echo "✅ Projeto atualizado com sucesso!"
echo ""
echo "   Para por o projeto no ar execute..."
echo "	 - npm run build"
echo "   - npm start"
echo ""
echo "   Para garantir o app no ar caso reiniciei, usamos pm2"
echo "	 - npm install -g pm2"
echo "   - pm2 start seu_app.js"
echo ""
echo "   Para garantir que o Node suba após reinicialização do servidor:"
echo "   - pm2 startup"
echo "   - pm2 save"
echo "   - pm2 list"   
