#!/bin/bash

REPO_LOCAL="/var/www/campointeligente-site"
DESTINO="git@github.com:marcosmoraisjr/CampoInteligente.git"

echo "⚠️  ATENÇÃO: Você está prestes a espelhar o repositório RESTIC36 no seu repositório da Vercel:"
echo "    Origem local: $REPO_LOCAL"
echo "    Destino:      $DESTINO"
echo
read -p "❓ Deseja realmente continuar e sobrescrever o repositório de destino? (sim/não): " confirmacao

if [[ "$confirmacao" != "sim" ]]; then
  echo "❌ Operação cancelada pelo usuário."
  exit 0
fi

echo "📦 Acessando repositório local..."
cd "$REPO_LOCAL" || {
  echo "❌ Erro: diretório $REPO_LOCAL não encontrado."
  exit 1
}

# Verifica remoto atual
echo "🔍 Verificando repositórios remotos atuais:"
git remote -v

# Remove remoto destino se já existir
git remote remove destino 2>/dev/null

# Adiciona destino
echo "➕ Adicionando repositório de destino..."
git remote add destino "$DESTINO"

# Espelhando com --mirror
echo "🚀 Espelhando conteúdo para o destino (push --mirror)..."
git push destino --mirror

# Verificação final
if [ $? -eq 0 ]; then
  echo "✅ Espelhamento concluído com sucesso!"
else
  echo "❌ Falha durante o push. Verifique permissões SSH ou conflitos."
  exit 1
fi

# Exibe o repositório atual
echo "🔍 Verificando repositório remoto atual..."
git remote -v
git status
